<?php

$connection = mysqli_connect('127.0.0.1', 'root', 'Cla99Rin_14elLo', 'juice');

if ($connection == false) {
	echo 'Произошла ошибка, попробуйте обновить страницу.';
	exit();
}

$current_product_id = $_GET['id'];

$product_query = mysqli_query($connection, "SELECT * FROM `products` WHERE id = $current_product_id");

while( ($product_info = mysqli_fetch_assoc($product_query)) ) {
	$product_title = $product_info['name'];
	$product_description = $product_info['description'];
	$product_features = $product_info['features'];
	$product_price  = $product_info['price'];
	$product_img = $product_info['img'];
}

mysqli_free_result($product_query);
mysqli_close($connection);
?>