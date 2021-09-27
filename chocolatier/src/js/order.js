// для переключения видимости секций
var basketSection = document.querySelector('.basket-section'),
	deliverySection = document.querySelector('.delivery-section'),
	orderConfirmedSection = document.querySelector('.confirm-order-section');


// выводим содержимое корзины
var orderContainer = document.querySelector('.order-container'),
  chooseDiv = document.querySelector('#choose-div'),
	totalWrap = document.querySelector('.total-wrap'),
	total = document.querySelector('.total'),
	requestsWrap = document.querySelector('.requests-wrap'),
	moneyQuantity = document.querySelector('.money-quantity'),
	totalPrice = 0,
	itemDeleteBtn,
	clearBasketBtn;

var basket = JSON.parse(localStorage.getItem('basket'));

if (window.matchMedia('(max-width: 1280px)').matches) {
	itemDeleteBtn = document.querySelector('.delete-product-mob');
	clearBasketBtn = document.querySelector('.clear-basket-mob');
} else {
	itemDeleteBtn = document.querySelector('.delete-product');
	clearBasketBtn = document.querySelector('.clear-basket');
}

function createItem() {
	"use strict";
	var id,
		orderItem,
		itemImg,
		itemTitle,
		itemQuantity,
		itemPrice;

	for (id in basket) {
		orderItem = document.createElement('div');
		itemImg = document.createElement('img');
		itemTitle = document.createElement('p');
		itemQuantity = document.createElement('p');
		itemPrice = document.createElement('p');

		orderContainer.appendChild(orderItem);
		orderItem.classList.add('order-item');

		itemDeleteBtn = itemDeleteBtn.cloneNode(true);
		orderItem.appendChild(itemDeleteBtn);
		itemDeleteBtn.id = basket[id][4];
		itemDeleteBtn.style.display = "inline";

		orderItem.appendChild(itemImg);
		itemImg.src = basket[id][0];
		itemImg.classList.add('item-img');


		itemTitle.innerHTML = basket[id][1];
		orderItem.appendChild(itemTitle);
		itemTitle.classList.add('item-title');

		itemQuantity.innerHTML = basket[id][2] + ' ' + basket[id][5];
		orderItem.appendChild(itemQuantity);
		itemQuantity.classList.add('item-quantity');

		itemPrice.innerHTML = "$" + basket[id][3];
		orderItem.appendChild(itemPrice);
		itemPrice.classList.add('item-price');

		totalPrice = totalPrice + basket[id][3];
	}
	moneyQuantity.innerHTML = totalPrice;
}

function removeExtraButtons() {
	"use strict";
	var button = document.querySelector('.delete-product'),
		buttonMob = document.querySelector('.delete-product-mob');
	button.remove();
	buttonMob.remove();
}
removeExtraButtons();

// отображаем корзину вместе с кнопками
if (localStorage.getItem('basket')) {
	chooseDiv.style.display = "none";
	orderContainer.style.display = "block";
	totalWrap.style.display = "grid";
	requestsWrap.style.display = "flex";

	createItem();
}

// удаляем конкретный товар из корзины
var itemDeleteButtons = document.getElementsByClassName('remove-product-btn');

function removeItem() {
	var currentButtonId = this.id,
		item,
		basketNew;

	for (item in basket) {
		if (basket[item][4] === currentButtonId) {
			totalPrice = totalPrice - basket[item][3];
			moneyQuantity.innerHTML = totalPrice;
			delete basket[item];
		}
	}

	this.parentElement.remove();

	if ((document.querySelector('.order-item')) === null) {
		localStorage.clear();
		orderContainer.style.display = "none";
		totalWrap.style.display = "none";
		requestsWrap.style.display = "none";
		chooseDiv.style.display = "block";
	} else {
		basketNew = JSON.stringify(basket);
		localStorage.setItem('basket', basketNew);
	}
}

for (i = 0; i < itemDeleteButtons.length; i += 1) {
	itemDeleteButtons[i].addEventListener('click', removeItem, false);
}

// очищаем корзину и локальное хранилище
function clearBasket() {
	"use strict";
	var orderItems = document.querySelectorAll('.order-item'),
		i;

	for (i = 0; i < orderItems.length; i += 1) {
		orderItems[i].remove();
	}

	localStorage.clear();
	orderContainer.style.display = "none";
	totalWrap.style.display = "none";
	requestsWrap.style.display = "none";
	chooseDiv.style.display = "block";
}

clearBasketBtn.onclick = clearBasket;

// кнопка с пожеланиями
var addRequestsBtn = document.querySelector('#requests'),
	requestsImg = document.querySelector('#requests-img'),
	requestsDiv = document.querySelector('.order-requests'),
	requestsTextWrap = document.querySelector('.requests-text-wrap'),
	requestsTextarea = document.querySelector('#requests-textarea'),
	saveRequestsBtn = document.querySelector('.save-requests-btn');

addRequestsBtn.onmouseover = function () {
	"use strict";
	requestsImg.src = 'img/chocoicon2.png';
};
addRequestsBtn.onmouseout = function () {
	"use strict";
	requestsImg.src = 'img/chocoicon1.png';
};
requestsDiv.onclick = function () {
	"use strict";
	requestsDiv.style.display = 'none';
	requestsTextWrap.style.display = 'flex';
};
saveRequestsBtn.onclick = function () {
	"use strict";
	requestsTextarea.value = 'Хотеть не вредно!';

	setTimeout(function () {
		requestsTextWrap.style.display = 'none';
		requestsDiv.style.display = 'flex';
	}, 3000);
};



// переход из корзины в оформление заказа
var orderButton = document.querySelector('.order-now-btn'),
	confirmBtn = document.querySelector('.confirm-btn'),
	returnBtn = document.querySelector('.return-btn'),
	returnAfterConfirmBtn = document.querySelector('.return-after-confirm'),
	errorMessage = document.querySelector('#modal-window-wrap'),
	errorCloseBtn = document.querySelector('#modal-window-btn');

function basketToOrder() {
	"use strict";
	basketSection.style.display = "none";
	deliverySection.style.display = "block";
}

orderButton.addEventListener('click', basketToOrder);

function returnToBasket() {
	"use strict";
	deliverySection.style.display = "none";
	basketSection.style.display = "block";
}

returnBtn.addEventListener('click', returnToBasket);

// оформление заказа
var address = document.querySelector('#address-container');
var phone = document.querySelector('#phone-container');
var deliverySelect = document.querySelector('#delivery-sel');

function getValue() {
	"use strict";
	if (deliverySelect.value === "export") {
		address.style.display = "none";
	} else {
		address.style.display = "block";
	}
}

// проверка правильности заполнения полей с контактными данными

var contactFormInputs = {
	nameP: document.querySelector('#first-name-p'),
	lastNameP: document.querySelector('#last-name-p'),
	phoneP: document.querySelector('#phone-p'),
	addressP: document.querySelector('#address-p'),
	nameInput: document.querySelector('#first-name-input'),
	lastNameInput: document.querySelector('#last-name-input'),
	phoneInput: document.querySelector('#phone-input'),
	addressInput: document.querySelector('#address-input'),
	allInputs: document.querySelectorAll('input[data-rule]')
};

// валидация формы
for (let input of contactFormInputs.allInputs) {
	input.addEventListener('blur', inputsValidate);
}

function inputsValidate() {
	let rule = this.dataset.rule;
	let value = this.value;
	let check;

	switch (rule) {
		case 'name':
			check = /^[а-яА-ЯЁё-]{2,25}$/.test(value);
		break;
		case 'phone':
			check = /^[\+380[0]+[0-9]{9}$/.test(value);
		break;
		case 'address':
			check = /^[а-яА-ЯЁё]+\s[а-яА-ЯЁё\s]*[0-9]{1,3}[0-9а-я//?]*\,\sкв\.\s[0-9]{1,3}$/.test(value);
		break;
	}

	this.classList.remove('valid');
	this.classList.remove('invalid');

	if (check) {
		this.classList.add('valid');
	} else {
		this.classList.add('invalid');
	}
}

function checkForm() {
	let inputsArray = [];
	for (let input of contactFormInputs.allInputs) {
		if (input.classList.contains("valid")) {
			inputsArray.push(input);
		}
	}
	if (inputsArray.length == 4) {
		return true;
	} else {
		return false;
	}
}

// подтверждение заказа
function confirmOrder() {
	"use strict";

	let formValid = checkForm();

	if (formValid == true) {
		deliverySection.style.display = "none";
		orderConfirmedSection.style.display = "block";
	} else {
		errorMessage.style.display = "block";
		errorCloseBtn.onclick = function () {
			errorMessage.style.display = "none";
		}
	}

	returnAfterConfirmBtn.onclick = function () {
		orderConfirmedSection.style.display = "none";
		basketSection.style.display = "block";

		if (clearBasketBtn !== "undefined") {
			clearBasket.call(clearBasketBtn);
		}
	};
}

// добавляем обработчик клика на кнопку отправки формы

confirmBtn.addEventListener('click', confirmOrder);
