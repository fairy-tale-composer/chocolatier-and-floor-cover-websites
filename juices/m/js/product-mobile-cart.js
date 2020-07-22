/* jshint
devel: true,
browser: true,
globals: true
*/
let basketNumber = document.querySelector('#basket-number'),
	juices = 0,
	quantityInput = document.querySelector('.quantity-input'),
	addToBasketBtn = document.querySelector('.add-to-basket-btn'),
	basketIcon = document.querySelector('.header-basket-icon'),
	greyBackground = document.querySelector('.grey-background'),
	addedToBasketModal = document.querySelector('#added-to-basket-modal'),
	addedModalCloseBtn = document.querySelector('.added-modal-close-btn');

const countJuicesInLS = () => {
	if (localStorage.length !== 0) {
		for (let i = 0; i < localStorage.length; i += 1) {
			if (localStorage.key(i).match(/^juice[0-9]{1,2}$/)) {
				juices += 1;		
			}
		}
	}
};

const setBasketNumber = () => {
	if (juices >= 1) {
		basketNumber.textContent = juices;
	}
};

countJuicesInLS();
setBasketNumber();

basketIcon.onclick = () => {
	window.location.href = 'full-cart.php';
};

const addProductToStorage = () => {
	const productInfo = {
		id: 'juice' + document.querySelector('#product-id').innerHTML,
		title: document.querySelector('.product-title').innerHTML,
		img: document.querySelector('.product-img').src,
		quantity: document.querySelector('.quantity-input').value,
		price: document.querySelector('#info-price-number').innerHTML
	};
	
	if (productInfo.quantity === '') {
		productInfo.quantity = '1';
	}
	
	// проверяем, есть ли уже такой товар в локальном хранилище
	let checkCurrentProductLS = localStorage.getItem(productInfo.id);
	
	if (checkCurrentProductLS === null) {
		localStorage.setItem(productInfo.id, JSON.stringify(productInfo));
		
		juices += 1;
		setBasketNumber();
	} else {
		checkCurrentProductLS = JSON.parse(checkCurrentProductLS);
		checkCurrentProductLS.quantity = Number(checkCurrentProductLS.quantity);
		checkCurrentProductLS.quantity += Number(productInfo.quantity);
		localStorage.setItem(checkCurrentProductLS.id, JSON.stringify(checkCurrentProductLS));
	}
};

addToBasketBtn.onclick = () => {
	addProductToStorage();
	greyBackground.classList.add('grey-background-mobile');
	addedToBasketModal.show();
};

addedModalCloseBtn.onclick = () => {
	addedToBasketModal.close();
	greyBackground.classList.remove('grey-background-mobile');
};