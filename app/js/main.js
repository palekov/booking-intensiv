$(document).ready(function() {
	$('#btn-open-form').click(function(e) {
		e.preventDefault();
	$(this).hide();	
	$('.booking-form-wrapper').fadeIn(1000);
	});
	
	$(".phone-mask").mask("+375 (99) 999-99-99");
})