<!DOCTYPE html>
<html lang="ru">
	<head id="contacts-page">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Контакты</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" href="css/nav-and-footer.css">
		<link rel="stylesheet" href="css/contacts.css">
		<link rel="stylesheet" href="css/side-cart.css">
	</head>
	<body>
		<div class="grey-background"></div>
		<div class="header-section-wrap">
			<?php require('side-cart.html');
			require('header.html'); ?>
			<section class="contacts-section container">
				<div class="row my-5">
					<div class="contacts-info-wrap col-sm-5">
						<h1>Контакты</h1>
						<p class="contacts-info">ул. Арбат, 1а, Москва,<br>119019, Россия</p>
						<p class="contacts-info" id="email-info">info@mysite.ru</p>
						<p class="contacts-info">Тел.: +7 (495) 000 00 00<br>Факс: +7 (495) 000 00 00</p>
					</div>
					<div class="form-wrap col-sm-7 d-flex justify-content-center align-items-center mt-5 mt-sm-0">
						<form class="d-flex flex-lg-row justify-content-end">
							<div class="inputs-wrap d-inline-flex flex-column justify-content-between">
								<input class="my-3 my-lg-0" type="text" placeholder="Имя">
								<input class="mb-3 mb-lg-0" type="email" placeholder="Эл. почта">
								<input class="mb-3 mb-lg-0" type="text" placeholder="Телефон">
							</div>
							<textarea placeholder="Добавьте сообщение..."></textarea>
							<button id="submit-button" class="mt-2" type="button">Отправить</button>
						</form>
					</div>
				</div>
				<div class="map-wrap">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17965.9578057719!2d37.57532930543347!3d55.7455642578207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb36cd6dd11%3A0xaa2dc6dc581d3a7f!2z0YPQuy4g0JDRgNCx0LDRgiwgMjgvMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExOTAwMg!5e0!3m2!1sru!2sua!4v1591384050141!5m2!1sru!2sua" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				</div>
			</section>
		</div>
		<?php require('footer.html'); ?>
		<script src="js/set-active-navbar-item.js"></script>
		<script src="js/side-cart-for-other-pages.js"></script>
	</body>
</html>