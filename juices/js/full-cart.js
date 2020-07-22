/* jshint 
esversion: 6,
globals: true, 
devel: true, 
browser: true 
*/

// появление и скрытие
const addPromocodeBtn = document.querySelector('#enter-promocode-a'),
	addNoteBtn = document.querySelector('#add-note-a'),
	orderBtn = document.querySelector('#order-button'),
	promocodeWrap = document.querySelector('.promocode-wrap'),
	noteWrap = document.querySelector('.note-wrap'),
	orderButton = document.querySelector('#order-button'),
	modalWindowBackground = document.querySelector('#modal-window-background'),
	modalWindow = document.querySelector('#modal-window'),
	orderConfirmBtn = document.querySelector('#order-confirm-btn');

addPromocodeBtn.onclick = function() {
	promocodeWrap.classList.toggle('promocode-wrap-show');
};

addNoteBtn.onclick = function () {
	noteWrap.classList.toggle('note-wrap-show');
};

orderButton.onclick = function () {
	modalWindowBackground.style.display = 'block';
	modalWindow.show();
	modalWindow.style.opacity = '1';
};

orderConfirmBtn.onclick = function () {
	modalWindow.style.opacity = '0';
	
	setTimeout(function () {
		modalWindow.close();
		modalWindowBackground.style.display = 'none';
	}, 1000);
};

// корзина
const myBasket = document.querySelector('.my-basket'),
	emptyCart = document.querySelector('.empty-cart'),
	promocodeAndNoteWrap = document.querySelector('.promocode-and-note-wrap'),
	basketItemObj = {};
let juicesInStorage = 0;

function checkJuicesInStorage() {
	juicesInStorage = 0;
	
	for (let i = 0; i < localStorage.length; i += 1) {
		if (localStorage.key(i).match(/^juice+[0-9]{1,2}$/)) {
			juicesInStorage += 1;
		}
	}
}

checkJuicesInStorage();

if (juicesInStorage === 0) {
	promocodeAndNoteWrap.style.display = 'none';
	emptyCart.style.display = 'block';
} else {
	
	for (let i = 0; i < localStorage.length; i +=1) {
		let currentStorageItem = localStorage.key(i);
		
		if (currentStorageItem.match(/^juice+[0-9]{1,2}$/)) {
			
			currentStorageItem = localStorage.getItem(currentStorageItem);
			currentStorageItem = JSON.parse(currentStorageItem);
			
			if (i === 0) {
				basketItemObj.currentItem = document.querySelector('.basket-item');
				basketItemObj.currentItem.style.display = 'flex';
			} else {
				basketItemObj.currentItem = basketItemObj.currentItem.cloneNode(true);
				promocodeAndNoteWrap.before(basketItemObj.currentItem);
			}
			
			basketItemObj.img = basketItemObj.currentItem.querySelector('.basket-item-img');
			basketItemObj.title = basketItemObj.currentItem.querySelector('.basket-item-title');
			basketItemObj.price = basketItemObj.currentItem.querySelector('.basket-item-price');
			basketItemObj.quantity = basketItemObj.currentItem.querySelector('.basket-item-quantity');
			basketItemObj.deleteItemBtn = basketItemObj.currentItem.querySelector('.delete-basket-item-btn');
			
			
			basketItemObj.currentItem.id = currentStorageItem.id;
			basketItemObj.img.src = currentStorageItem.img;
			basketItemObj.title.textContent = currentStorageItem.title;
			basketItemObj.price.textContent = currentStorageItem.price + ' руб';
			basketItemObj.quantity.textContent = currentStorageItem.quantity + ' шт.';
			
			basketItemObj.deleteItemBtn.onclick = deleteBasketItem;
			promocodeAndNoteWrap.style.display = 'flex';
		}
	}
}

countTotal();

function deleteBasketItem(e) {
	const targetBasketItem = e.currentTarget.parentElement.parentElement.parentElement;
	targetBasketItem.classList.add('basket-item-deleted');
	
	setTimeout(function() {
		localStorage.removeItem(targetBasketItem.id);
		checkJuicesInStorage();
		
		if (juicesInStorage === 0) {
			targetBasketItem.style.display = 'none';
			promocodeAndNoteWrap.style.display = 'none';
	    emptyCart.style.display = 'block';
		} else {
			targetBasketItem.remove();
		}
		
		countTotal();
		
	}, 300);
}

function countTotal() {
	let orderPrice = document.querySelector('#order-price'),
		deliveryPrice = document.querySelector('#delivery-price'),
		totalPrice = document.querySelector('#total-price');
	
	if (emptyCart.style.display !== 'block') {
		const basketItems = document.querySelectorAll('.basket-item');
		let order = 0;
		
		for (let i = 0; i < basketItems.length; i += 1) {
			let currentItemPrice = basketItems[i].querySelector('.basket-item-price').textContent,
				currentItemIndex = currentItemPrice.indexOf('руб');
			
			currentItemPrice = Number(currentItemPrice.slice(0,currentItemIndex));
			order += currentItemPrice;
		}
		totalPrice.textContent = (order + 50).toFixed(2) + ' руб';
		orderPrice.textContent = order.toFixed(2) + ' руб';
	} else {
		orderPrice.textContent = '0.00 руб';
		deliveryPrice.textContent = '0.00 руб' ;
		totalPrice.textContent = '0.00 руб';
	}
}