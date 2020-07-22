<?php
require('product-dbquery.php');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Сок</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="css/nav-and-footer.css">
	<link rel="stylesheet" href="css/product.css">
</head>
<body>
	<div class="grey-background">
		<?php require('product-added-dialog.html'); ?>
	</div>
	<div class="header-section-wrap">
	<?php require('header.html'); ?>
		<section class="product-section container-lg mt-5">
			<div class="product-row row">
				<div class="product-img-wrap col-md-6">
					<img src="<?php echo $product_img; ?>" class="product-img">
					<ul id="features1" class="product-features mt-3"><?php echo $product_features ?></ul>
				</div>
				<div class="product-info-wrap col-md-6 clearfix">
					<h1 class="product-title mx-auto mx-md-0"><?php echo $product_title ?></h1>
					<p class="id">код: <span id="product-id"><?php echo $current_product_id; ?></span></p>
					<p class="price my-md-3">руб <span id="info-price-number"><?php echo $product_price; ?></span></p>
					<p class="product-description"><span class="product-span">О ТОВАРЕ</span><?php echo $product_description ?></p>
					<ul id="features2" class="product-features mt-3"><?php echo $product_features ?></ul>
					<div class="quantity-wrap d-flex my-md-3">
						<p class="quantity d-flex flex-column">Количество
							<input class="quantity-input mt-2" type="number">
						</p>
						<button class="add-to-basket-btn mt-md-4" type="button">Добавить в корзину</button>
					</div>
				</div>
			</div>
		</section>
	</div>
	<?php require('footer.html'); ?>
	<script async src="js/product-mobile-cart.js"></script>
</body>