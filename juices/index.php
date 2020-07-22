<!DOCTYPE html>
<html lang="ru">
	<head id="home-page">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Эко сок</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" href="css/nav-and-footer.css">
		<link rel="stylesheet" href="css/home.css">
		<link rel="stylesheet" href="css/side-cart.css">
	</head>
	<body class="d-flex flex-column justify-between">
		<div class="grey-background"></div>
		<?php
			require('side-cart.html');
			require('header.html');
			?>
		<div class="lemon-wrap m-auto clearfix">
			<div class="h1-and-btn-wrap d-flex flex-column justify-content-center align-items-center float-right">
				<h1 class="text-right">Натуральный сок<br>из свежих апельсинов,<br>лимонов и грейпфрутов.<br>Никаких добавок!</h1>
				<button class="buy-btn" type="button">купить</button>
			</div>
		</div>
		<?php
		require('footer.html');
		?>
		<script src="js/set-active-navbar-item.js"></script>
		<script src="js/side-cart-for-other-pages.js"></script>
	</body>
</html>