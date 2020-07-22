<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Корзина</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" href="css/nav-and-footer.css">
		<link rel="stylesheet" href="css/full-cart.css">
	</head>
	<body>
		<?php require('header.html'); ?>
		<div id="modal-window-background">
			<dialog id="modal-window">
				<h2 class="modal-window-h2 text-center mb-0">Оформление заказа</h2>
				<form id="modal-order-form" class="d-flex flex-column justify-content-between m-auto">
					<label class="modal-order-form-label clearfix">
						<p>Имя</p><input type="input">
					</label>
					<label class="modal-order-form-label clearfix">
						<p>Фамилия</p><input type="input">
					</label>
					<label class="modal-order-form-label clearfix">
						<p>Эл. почта</p><input type="input">
					</label>
					<label class="modal-order-form-label clearfix">
						<p>Телефон</p><input type="input">
					</label>
					<label class="modal-order-form-label clearfix">
						<p>Адрес</p><input type="input">
					</label>
					<label class="modal-order-form-label clearfix">
						<p>Оплата</p>
						<select id="modal-payment-select">
							<option>Наличными при получении</option>
							<option>Картами Visa и MasterCard</option>
							<option>Безналичный расчет (без НДС)</option>
							<option>Наложенный платеж</option>
						</select>
					</label>
					<label class="modal-order-form-label">
						<p>Способ доставки</p>
						<select id="modal-delivery-select">		
							<option>Cамовывоз с филиала (Одесса и Киев)</option>
							<option>Курьерская доставка (Одесса и Киев)</option>
							<option>Адресная доставка (вся Украина)</option>
						</select>
					</label>
					<button id="order-confirm-btn" type="button">Подтвердить</button>
				</form>
			</dialog>
		</div>
		<section class="full-cart-section container mt-5">
			<div class="row">
				<div class="my-basket col-md-6 px-lg-4">
					<h2 class="text-left text-md-left pl-2 pb-3">Моя корзина</h2>
					<div class="basket-item">
						<img class="basket-item-img" src="img/juice2.jpg">
						<div class="basket-item-info-wrap d-flex flex-wrap flex-column justify-content-around flex-grow-1">
							<p class="basket-item-title">Апельсиново-грейпфрутовый сок</p>
						  <p class="basket-item-price">14.99 руб</p>
							<div class="basket-item-quantity-wrap d-flex justify-content-between">
								<p class="basket-item-quantity">1 шт.</p>
								<button class="delete-basket-item-btn" type="button">
								<div class="delete-item-line"></div>
						</button>
							</div>
						</div>
					</div>
					<div class="empty-cart text-center">
						<img class="my-2 my-md-3 my-lg-4" src="img/empty-cart.png">
						<h3 class="text-center mb-4 pb-3">Корзина пуста</h3>
						<button class="continue-shopping-btn"><a href="shop.php">Продолжить покупки</a></button> 
					</div>
					<div class="promocode-and-note-wrap flex-column align-items-end align-items-md-start">
						<a id="enter-promocode-a" class="my-basket-a mt-4 mb-2">Вставить промокод<img id="promocode-icon" src="img/promocodegreen.png"></a>
						<div class="promocode-wrap">
							<input id="enter-promocode-input" type="input" placeholder="Введите промокод">
							<button id="apply-promocode-btn" type="button">Применить</button>
						</div>
						<a id="add-note-a" class="my-basket-a">Добавить примечание<img id="add-note-icon" src="img/notegreen.png"></a>
						<div class="note-wrap">
							<textarea id="note-textarea" placeholder="Введите примечание"></textarea>
							<button id="save-note-btn">Сохранить</button>
						</div>
					</div>
				</div>
				<div class="order-summary col-md-6  px-lg-4">
					<h2 class="text-left text-md-left mt-4 mt-md-0 pb-3">Общая стоимость</h2>
					<form name="order-form" id="order-form">
						<p class="mb-2 clearfix">Стоимость заказа: 
					 		<span id="order-price" class="float-right">145.99 руб</span>
						</p>
						<div class="delivery-method-wrap clearfix">
							<p id="delivery-method-p" class="mb-2">Способ доставки</p>
							<select id="delivery-method-select" class="mb-3">
								<option id="delivery-option-1">Cамовывоз из филиала (Одесса и Киев)</option>
								<option id="delivery-option-2">Курьерская доставка (Одесса и Киев)</option>
								<option id="delivery-option-3">Адресная доставка (вся Украина)</option>
						</select>
						</div>
						<p id="delivery-price-p" class="mb-2 clearfix">Стоимость доставки: <span id="delivery-price" class="float-right">50 руб</span></p>
						<p id="total-price-p" class="mb-4 pt-4 clearfix">Всего к оплате: 
							<span id="total-price" class="float-right">180.99 руб</span></p>
						<div class="order-button-wrap text-right">
							<button id="order-button" type="button">Оформить заказ</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<?php require('footer.html'); ?>
		<script src="js/full-cart.js"></script>
	</body>
</html