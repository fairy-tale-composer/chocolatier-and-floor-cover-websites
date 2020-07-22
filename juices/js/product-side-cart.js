/* jshint 
globals: true, 
devel: true, 
browser: true 
*/

// информация о товаре
let productInfo = {
		id: 0,
		title: 0,
		img: 0,
		quantity: 0,
		price: 0
	},
	basketIconNumber = document.querySelector('#basket-number'),
	cartProduct = document.querySelector('.cart-product'),
	cartProductTitle = cartProduct.querySelector('.cart-product-name'),
	cartProductImg = cartProduct.querySelector('.cart-product-img'),
	cartProductPrice = cartProduct.querySelector('.cart-product-price-number'),
	cartProductQuantity = cartProduct.querySelector('.cart-product-input'),
	cartProductsWrap = document.querySelector('.cart-products-wrap'),
	subtotalWrap = document.querySelector('.subtotal-wrap'),
	subtotalPriceSpan = document.querySelector('#subtotal-price-span'),
	emptyCart = document.querySelector('.empty-cart'),
	deleteProductBtn;

// появление корзины и скрытие
let headerBasketIcon = document.querySelector('.header-basket-icon'),
	cart = document.querySelector('.cart'),
	greyBackground = document.querySelector('.grey-background'),
	cartArrowBtn = document.querySelector('.bi-arrow-bar-right'),
	addToBasketBtn = document.querySelector('.add-to-basket-btn'),
	viewFullCartBtn = document.querySelector('.view-cart-btn'),
	click = false;

function showCart() {
	'use strict';
	greyBackground.style.display = 'block';
	cart.style.display = 'flex';
	
	setTimeout(function () {
		cart.style.transform = 'translateX(0)';
		cart.style.opacity = '1';
	}, 170);
}

headerBasketIcon.onclick = showCart;
	
cartArrowBtn.onclick = function hideCart() {
	'use strict';
	cart.style.transform = 'translateX(360px)';
	cart.style.opacity = '0';
	
	setTimeout(function () {
	  cart.style.display = 'none';
    greyBackground.style.display = 'none';
	}, 1000);
};

viewFullCartBtn.onclick = function () {
	window.location.href = 'full-cart.php';
};

// проверяем, запущена функция addProduct при клике на кнопку, или при загрузке страницы
function checkClick() {
	'use strict';
	click = true;
}
// наполнение корзины из LS, либо добавление конкретного товара
function addProduct() {
	'use strict';

	if (click) {
		addCurrentProduct();
	} else {
		addProductFromLocalStorage();
	}
	countSubtotal();
	click = false;
}

// удаление товара из корзины
function deleteProduct() {
	let deletingProduct = this.parentElement;
	deletingProduct.style.transform = 'translateX(310px)';
	deletingProduct.style.opacity = '0';
	
	setTimeout(function () {
		localStorage.removeItem(deletingProduct.id);
		basketIconNumber.textContent = localStorage.length;
		
		if (localStorage.length === 0) {
			cartProductsWrap.style.display = 'none';
			subtotalWrap.style.display = 'none';
			emptyCart.style.display = 'flex';
			deletingProduct.style.transform = 'none';
			deletingProduct.style.opacity = '1';
		} else {
			deletingProduct.remove();
		}
		countSubtotal();
	}, 300);
}

// пересчитать итого
function countSubtotal() {
	'use strict';
	let cartProductsList = document.querySelectorAll('.cart-product'),
	  subtotal,
		currentProductPrice,
		currentProductQuantity,
	  i;
	
	if (click === false) {
		subtotal = 0;
		
		for (i = 0; i < cartProductsList.length; i += 1) {
				currentProductPrice = cartProductsList[i].querySelector('#cart-product-price-number').innerHTML;
				currentProductPrice = Number(currentProductPrice);
				currentProductQuantity = cartProductsList[i].querySelector('.cart-product-input').value;
				currentProductQuantity = Number(currentProductQuantity);
				subtotal += currentProductPrice * currentProductQuantity;
			}
	} else {
		let addedProduct = cartProductsWrap.querySelector('#' + productInfo.id);
		
		subtotal = Number(subtotalPriceSpan.textContent);
		currentProductPrice = addedProduct.querySelector('#cart-product-price-number').innerHTML;
		currentProductQuantity = addedProduct.querySelector('.cart-product-input').value;
		
		currentProductPrice = Number(currentProductPrice);
		currentProductQuantity = Number(currentProductQuantity); 
		
		subtotal += currentProductPrice * currentProductQuantity;
	}
  subtotalPriceSpan.innerHTML = subtotal.toFixed(2);
}

// при загрузке страницы 
function addProductFromLocalStorage() {
	let i,
		LSProductInfo;
	
	basketIconNumber.textContent = localStorage.length;
	
	if (localStorage.length !== 0) {
		
		for (i = 0; i < localStorage.length; i += 1) {
			LSProductInfo = localStorage.key(i);
			
			if (localStorage.key(i).match(/juice+\d+/)) {
				LSProductInfo = JSON.parse(localStorage.getItem(LSProductInfo));
				
				if (i !== 0) {
					cartProduct = cartProduct.cloneNode(true);
					cartProductsWrap.append(cartProduct);
				}
					
				cartProductTitle = cartProduct.querySelector('.cart-product-name');
				cartProductImg = cartProduct.querySelector('.cart-product-img');
				cartProductPrice = cartProduct.querySelector('#cart-product-price-number');
				cartProductQuantity = cartProduct.querySelector('.cart-product-input');
					
				cartProduct.id = LSProductInfo.id;
				cartProductTitle.innerHTML = LSProductInfo.title;
				cartProductImg.src = LSProductInfo.img;
				cartProductPrice.innerHTML = LSProductInfo.price;
				cartProductQuantity.value = LSProductInfo.quantity;
					
				// удаление любого из товаров в корзине
				deleteProductBtn = cartProduct.querySelector('.cart-remove-item-btn');
				deleteProductBtn.onclick = deleteProduct;
			}
		}
		cartProductsWrap.style.display = 'block';
		subtotalWrap.style.display = 'block';
		emptyCart.style.display = 'none';
	}
}

// при клике на кнопку "добавить товар"
function addCurrentProduct() {
	let deleteAddedProductBtn,
		checkCurrentProductLS;
		
	productInfo.id = 'juice' + document.querySelector('#product-id').innerHTML;
	productInfo.title = document.querySelector('.product-title').innerHTML;
	productInfo.img = document.querySelector('.product-img').src;
	productInfo.quantity = document.querySelector('.quantity-input').value;
	productInfo.price = document.querySelector('#info-price-number').innerHTML;

	if (productInfo.quantity === '') {
		productInfo.quantity = '1';
	}
	// проверяем, есть ли уже такой товар в локальном хранилище
	checkCurrentProductLS = localStorage.getItem(productInfo.id);
	
	if (checkCurrentProductLS === null) {
		
		if (localStorage.length !== 0) {
			cartProduct = cartProduct.cloneNode(true);
			cartProductsWrap.append(cartProduct);
		} else {
			cartProductsWrap.style.display = 'block';
			subtotalWrap.style.display = 'block';
			emptyCart.style.display = 'none';
		}
		
		localStorage.setItem(productInfo.id, JSON.stringify(productInfo));
		basketIconNumber.textContent = localStorage.length;
		
	} else {
		checkCurrentProductLS = JSON.parse(checkCurrentProductLS);
		checkCurrentProductLS.quantity = Number(checkCurrentProductLS.quantity);
		checkCurrentProductLS.quantity += Number(productInfo.quantity);
		localStorage.setItem(checkCurrentProductLS.id, JSON.stringify(checkCurrentProductLS));
		
		cartProduct = cartProductsWrap.querySelector('#' + checkCurrentProductLS.id);
		productInfo.quantity = checkCurrentProductLS.quantity;
	}
	
	cartProductTitle = cartProduct.querySelector('.cart-product-name');
	cartProductImg = cartProduct.querySelector('.cart-product-img');
	cartProductPrice = cartProduct.querySelector('#cart-product-price-number');
	cartProductQuantity = cartProduct.querySelector('.cart-product-input');
	
	cartProduct.id = productInfo.id;
	cartProductTitle.innerHTML = productInfo.title;
	cartProductImg.src = productInfo.img;
	cartProductQuantity.value = productInfo.quantity;
	cartProductPrice.innerHTML = productInfo.price;
	
	showCart();
		
	// удаление товара из корзины и localStorage
	deleteAddedProductBtn = cartProduct.querySelector('.cart-remove-item-btn');
	deleteAddedProductBtn.onclick = deleteProduct;
}

window.onload = addProduct;

// добавить в корзину
addToBasketBtn.addEventListener('click', checkClick);
addToBasketBtn.addEventListener('click', addProduct);