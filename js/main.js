$( document ).ready(function() {

	$('.js-check').click(function(){
		$(this).siblings().removeClass('hidden');
		$(this).siblings().addClass('is-active');
		$(this).addClass('hidden');
		$(this).removeClass('is-active');
	});

	$('.js-submit-report').click(function(){
		$('.js-page-1').fadeIn();
		$('.overlay').fadeIn();
	});

	$('.overlay').click(function(){
		$('.modal').fadeOut();
		$('.overlay').fadeOut();
	});

	$('.js-page-1-btn').click(function(){
		$('.js-page-1').hide();
		$('.js-page-2').fadeIn();
	});

	$('.js-page-2-btn').click(function(){
		$('.js-page-2').hide();
		$('.js-page-3').fadeIn(function () {
    	$(this).delay(1500).fadeOut(function(){
    		$('.overlay').fadeOut();
    	});
  	});
	});


	$('.js-filter-map').click(function(){
		$('.js-page-filter').fadeIn();
		$('.overlay').fadeIn();
	});

	$('.js-remove-modals').click(function(){
		$('.js-page-filter').fadeOut();
		$('.overlay').fadeOut();
	});



});






