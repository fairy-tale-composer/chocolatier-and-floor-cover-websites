var obj = {
	dialog: document.querySelector('dialog'),
	dialogBg: document.querySelector('#dialog-bg'),
	dialogImg: document.querySelector('#dialog-img'),
	dialogTitle: document.querySelector('#dialog-title'),
	requests: document.querySelector('#requests'),
	addBtn: document.querySelector('.add-btn'),
	input: document.querySelector('input'),
	quantity: document.querySelector('#quantity-number'),
	quantityNumber: 1,
	plusBtn: document.querySelector('#plus-btn'),
	minusBtn: document.querySelector('#minus-btn'),
	cardClose: document.querySelector('#card-close-btn'),
	orderBtn: document.querySelector('.card-order-btn'),
	productId: 0,
	activeImg: 0
};

// сохраняем путь к картинке при нажатии на картинку
function saveImage() {
	obj.activeImg = this.src;
}

// сохраняем путь к картинке при нажатии на кнопку
function saveImageBtn() {
	var parent = this.parentElement;
	obj.activeImg = parent.querySelector('.menu-img').src;
}

var menuImg = document.getElementsByClassName('menu-img');
for (var i = 0; i < menuImg.length; i++) {
	menuImg[i].addEventListener('click', cardOpen, false);
	menuImg[i].addEventListener('click', saveImage, false);
}

var itemBucketBtn = document.getElementsByClassName('menu-btn');
for (var i = 0; i < itemBucketBtn.length; i++) {
	itemBucketBtn[i].addEventListener('click', cardOpen, false);
	itemBucketBtn[i].addEventListener('click', saveImageBtn, false);
}

var basketIcon = document.getElementsByClassName('basket-icon');
for (var i = 0; i < basketIcon.length; i++) {
	basketIcon[i].addEventListener('click', cardOpen, false);
	basketIcon[i].addEventListener('click', saveImageBtn, false);
}

function cardOpen() {
	obj.dialog.show();
	obj.dialog.style.display = 'flex';
	obj.dialog.style.flexDirection = 'column';
	obj.dialogBg.style.display = 'block';
	
	this.parentElement.classList.add('active');
	var activeItem = document.querySelector('.active');
	var hiddenImg = activeItem.firstElementChild.cloneNode(true);
	obj.dialog.appendChild(hiddenImg);
	obj.dialog.replaceChild(hiddenImg, obj.dialogImg);
	hiddenImg.style.display = 'inline';
	
	var itemTitle = activeItem.querySelector('.item-title');
	obj.dialogTitle.innerHTML = itemTitle.innerHTML;
	obj.productId = itemTitle.getAttribute('data-id');
	
	obj.requests.onmouseover = function () {
		obj.requests.style.color = '#F2C098';
		obj.addBtn.src = 'menu-img/add-btn1.png';
    };

	obj.requests.onmouseout = function () {
		obj.requests.style.color = '#BC9373';
		obj.addBtn.src = 'menu-img/add-btn.png';
	};

	obj.requests.onclick = function () {
		obj.requests.style.display = 'none';
		obj.input.style.display = 'block';
	};

	obj.plusBtn.onclick = function () {
		if (obj.quantity.textContent < 10) {
			obj.quantity.textContent++;
			obj.quantityNumber += 1;
		}
	};
	
	obj.minusBtn.onclick = function () {
		if (obj.quantity.textContent > 1) {
			obj.quantity.textContent--;
			obj.quantityNumber -= 1;
		}
	};
	
	var basketData = 0;
	
	function getBasketData() {
		return JSON.parse(localStorage.getItem('basket'));
	}
	function setBasketData() {
		basket = JSON.stringify(basketData);
		localStorage.setItem('basket', basket);
	}
	
	obj.orderBtn.onclick = function addToBasket() {
		obj.orderBtn.disabled = true;
		basketData = getBasketData() || {}, // получаем данные корзины или создаём новый объект, если данных нет
			itemImg = obj.activeImg,
			itemTitle = obj.dialogTitle.innerHTML,
			itemQuantity = obj.quantityNumber,
			itemPrice = itemQuantity * 90,
			itemId = obj.productId;
		if (basketData.hasOwnProperty(itemId)) { // если такой товар уже есть в корзине - добавляем +1 к его количеству
			var basketq = JSON.parse(basketData[itemId][2]);
			basketq = itemQuantity + basketq;
			basketData[itemId][2] = basketq;
			basketData[itemId][3] = basketq * 90;
		} else { // если товара в корзине нет, то добавляем в объект
			basketData[itemId] = [itemImg, itemTitle, itemQuantity, itemPrice, itemId];
		}
		if (!setBasketData(basketData)) { // обновляем данные в localStorage
			obj.orderBtn.disabled = false;
			alert("Товар добавлен в корзину");
		}
		return false;
	};
	
	// закрываем карточку
	obj.cardClose.onclick = function () {
		obj.dialog.close();
		obj.dialog.removeAttribute('style');
		obj.dialogBg.removeAttribute('style');
		activeItem.classList.remove('active');
		hiddenImg.classList.remove('hidden-img');
		hiddenImg.id = '#dialog-img';
		obj.dialogImg = hiddenImg;
		obj.input.style.display = 'none';
		obj.requests.style.display = 'block';
	};
}