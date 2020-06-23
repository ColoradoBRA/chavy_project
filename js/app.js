jQuery(function($){
	/*Menu JS*/
	$('.header_open').click(function(){
		$('.header_mega').addClass('open');
	});
	$('.header_mega_close').click(function(){
		$('.header_mega').removeClass('open');
	});
	/*Dropdown JS*/
	$(".main_questions_list_inner_span").on('click', function() {
    $(this).toggleClass('is-active').next(".main_questions_list_inner_p").stop().slideToggle(500);
    });
});