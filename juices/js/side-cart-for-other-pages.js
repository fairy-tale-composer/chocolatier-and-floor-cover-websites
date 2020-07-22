/* jshint 
globals: true, 
devel: true, 
browser: true 
*/

// информация о товаре
let basketIconNumber = document.querySelector('#basket-number'),
	cartProduct = document.querySelector('.cart-product'),
	cartProductTitle = cartProduct.querySelector('.cart-product-name'),
	cartProductImg = cartProduct.querySelector('.cart-product-img'),
	cartProductPrice = cartProduct.querySelector('.cart-product-price-number'),
	cartProductQuantity = cartProduct.querySelector('.cart-product-input'),
	cartProductsWrap = document.querySelector('.cart-products-wrap'),
	subtotalWrap = document.querySelector('.subtotal-wrap'),
	subtotalPriceSpan = document.querySelector('#subtotal-price-span'),
	emptyCart = document.querySelector('.empty-cart'),
	juices = 0,
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

// наполнение корзины из LS
function fullCart() {
	'use strict';
	addProductsFromLocalStorage();
	countSubtotal();
}

// удаление товара из корзины
function deleteProduct() {
	let deletingProduct = this.parentElement;
	deletingProduct.style.transform = 'translateX(310px)';
	deletingProduct.style.opacity = '0';
	juices -= 1;
	basketIconNumber.textContent = juices;
	
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
	  subtotal = 0,
		currentProductPrice,
		currentProductQuantity,
	  i;
	
	for (i = 0; i < cartProductsList.length; i += 1) {
		currentProductPrice = cartProductsList[i].querySelector('#cart-product-price-number').innerHTML;
		currentProductPrice = Number(currentProductPrice);
		currentProductQuantity = cartProductsList[i].querySelector('.cart-product-input').value;
		currentProductQuantity = Number(currentProductQuantity);
		subtotal += currentProductPrice * currentProductQuantity;
	}
  subtotalPriceSpan.innerHTML = subtotal.toFixed(2);
}

// наполнение корзины при загрузке страницы 
function addProductsFromLocalStorage() {
	let i,
		LSProductInfo;
	
	if (localStorage.length !== 0) {
		
		for (i = 0; i < localStorage.length; i += 1) {
			juices += 1;
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
		if (juices >= 1) {
			basketIconNumber.textContent = juices;
		}
		cartProductsWrap.style.display = 'block';
		subtotalWrap.style.display = 'block';
		emptyCart.style.display = 'none';
	}
}

window.onload = fullCart;