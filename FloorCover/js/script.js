jQuery('document').ready(function () {
    $(".nav-btn").on("click", function () {
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open") && $(".white").toggleClass("white-hidden");
    });
});