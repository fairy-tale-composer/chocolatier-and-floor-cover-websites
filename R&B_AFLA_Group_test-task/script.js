const radioList = document.querySelectorAll(".license-window__list-item-input"),
	licensesNumberInput = document.querySelector('.license-window__number-input'),
	selectedPlanNumber = document.querySelector('.license-window__selected-plan-number'),
	totalPrice = document.querySelector('.license-window__total-price');

function setActiveItem(e) {
	for (let i = 0; i < radioList.length; i += 1) {
		if (radioList[i].parentElement.classList.contains('list-item-active')) {
			radioList[i].parentElement.classList.remove('list-item-active');
		}
	}
	e.target.parentElement.classList.add('list-item-active');
	countTotal(e.target.parentElement);
	setSelectedPlan(e.target.id);
}

function countTotal(selectedItem) {
	let selectedLicensePrice = selectedItem.querySelector('.license-price').innerHTML;
	
	if (licensesNumberInput.value === "") {
		totalPrice.innerHTML = '$' + selectedLicensePrice;	
	} else {
		totalPrice.innerHTML = '$' + selectedLicensePrice * licensesNumberInput.value;
	}
}

for (let i = 0; i < radioList.length; i += 1) {
	radioList[i].addEventListener('change', setActiveItem);
}

function setSelectedPlan(id) {
	let planId = parseInt(id.match(/\d+/));
	selectedPlanNumber.innerHTML = '#' + planId;
}