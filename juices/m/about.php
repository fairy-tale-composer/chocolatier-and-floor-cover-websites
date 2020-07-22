<!DOCTYPE html>
<html lang="ru">
	<head id="about-page">
		<meta charset="UTF-8">
		<title>О нас</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" href="css/nav-and-footer.css">
		<link rel="stylesheet" href="css/about.css">
	</head>
	<body>
		<div class="grey-background"></div>
		<div class="header-section-wrap">
			<?php
			require('header.html');
			?>
			<section class="about-section row col-xl-7 col-lg-10 m-auto">
				<div class="col-md-6 col-xl-7">
					<h1>О нас</h1>
					<p>Это текст. Нажмите здесь, чтобы отредактировать его и добавить свой текст. Сделать это просто: нажмите «Редактировать текст» либо дважды нажмите на сам текст – и можете вставлять свое содержимое и задавать шрифт. Если хотите, его можно перетащить в любое место на странице. Это место отлично подходит, чтобы рассказать пользователям немного о себе. Здесь замечательно будет смотреться длинный текст о вашей компании и тех услугах, которые вы предоставляете. Все это место можно использовать, чтобы более подробно описать вашу компанию. Расскажите о вашей команде и предоставляемых услугах. Расскажите посетителям историю о том, как вам в голову пришла идея для своего дела.</p>
				</div>
				<div class="about-images-wrap col-md-6 col-xl-5 mt-5 mt-md-3 mx-0 px-xl-0 row">
					<img class="about-img1 col-6 mt-auto mx-auto" src="img/about-oranges-cutted.png">
					<img class="about-img2 col-6 mx-auto" src="img/about-juice-sm.png">
					<img class="about-img3 my-auto mx-0" src="img/about-juice-big.jpg">
				</div>
			</section>
		</div>
		<?php
		require('footer.html');
		?>
		<script src="js/set-active-navbar-item.js"></script>
		<script src="js/mobile-cart.js"></script>
	</body>
</html>