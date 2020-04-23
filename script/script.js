var $arrowBot = $(".arrow")
var $hS = $(".home-scroll")
var $aS = $(".about-scroll")
var $sS = $(".servicing-scroll")
var $pS = $(".portfolio-scroll")
var $bS = $(".blog-scroll")
var $cS = $(".contact-scroll")
var $fixMenu = $(".header__menu")

$(window).on("scroll",function () {
	if ($(window).scrollTop() >= 800){
		$arrowBot.fadeOut();
	}else{
		$arrowBot.fadeIn();
	}
});


$arrowBot.on("click", function(){
	$("html,body").animate({scrollTop: 800}, 1000)
});

$hS.on("click", function() {
	$("html,body").animate({scrollTop: 0}, 500)
});
$aS.on("click", function() {
	$("html,body").animate({scrollTop: 800}, 500)
});
$sS.on("click", function() {
	$("html,body").animate({scrollTop: 1500}, 500)
});
$pS.on("click", function() {
	$("html,body").animate({scrollTop: 2900}, 500)
});
$bS.on("click", function() {
	$("html,body").animate({scrollTop: 6000}, 500)
});
$cS.on("click", function(){
	$("html,body").animate({scrollTop: 7800}, 500)
});

$(document).ready(function() {
	$(".header__burger").click(function(event) {
		$(".header__burger,.header__menu").toggleClass("show-menu");
	});
});

$('.js-tab-trigger').on('click', function () {
	var tabName = $(this).data('tab'),
		tab = $('.js-tab-content[data-tab="'+tabName+'"]');

	$('.js-tab-trigger.activ').removeClass('activ');
	$(this).addClass('activ');

	$('.js-tab-content.activ').removeClass('activ');
	tab.addClass('activ');
});

$(document).ready(function() {
	$('.tabs-arrow').click(function(event) {
		$('.tabs-arrow,.portfolio__tabs').toggleClass('show-portfolio');
	});
});


// slider

$('.js-slide-trigger').on('click', function () {
	var slideName = $(this).data('slide'),
		slide = $('.js-slide-content[data-slide="'+slideName+'"]');

	$('.js-slide-trigger.activ-slide').removeClass('activ-slide');
	$(this).addClass('activ-slide');

	$('.js-slide-content.activ-slide').removeClass('activ-slide');
	slide.addClass('activ-slide');
});