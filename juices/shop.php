<?php

$connection = mysqli_connect('127.0.0.1', 'root', 'Cla99Rin_14elLo', 'juice');

if ($connection == false) {
	echo 'Произошла ошибка, попробуйте обновить страницу.';
	exit();
}

$six_products = mysqli_query($connection, "SELECT * FROM `products`");
?>
<!DOCTYPE html>
<html lang="ru">
<head id="shop-page">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Магазин</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="css/nav-and-footer.css">
	<link rel="stylesheet" href="css/shop.css">
	<link rel="stylesheet" href="css/side-cart.css">
</head>
<body>
	<div class="grey-background"></div>
	<div class="header-section-wrap">
		<?php require('side-cart.html');
		require('header.html'); ?>
		<section class="shop-section container">
			<h1>Магазин</h1>
			<div class="juices-grid row">
				<?php
				while( ($product = mysqli_fetch_assoc($six_products)) ) {
				?>
					<div class="juice-grid-item col-sm-6 col-md-4 col-lg-3" id="<?php echo $product['id']; ?>">
						<div class="juice-item-wrap position-relative">
							<img class="juice-item-img mb-3" src="<?php echo $product['img']; ?>">
							<a class="view-juice-a">Подробнее</a>
						</div>
						<div class="juice-title-wrap">
							<p class="juice-title mb-1"><?php echo $product['name']; ?></p>
							<p class="juice-price"><?php echo $product['price']; ?></p>
						</div>
					</div>
				<?php
				}
				mysqli_close($connection);
			?>
			</div>
		</section>
	</div>
	<?php require('footer.html'); ?>
	<script src="js/shop.js"></script>
	<script src="js/set-active-navbar-item.js"></script>
	<script src="js/side-cart-for-other-pages.js"></script>
</body>
</html>