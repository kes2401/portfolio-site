// Add scroll functionality to navigation items
$(document).on('click', 'a[href^="#"]', function(event){
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

// Add animation on hover
$('.tech').hover(function(){
		$(this).addClass('animated tada');
	}, function() {
		$(this).removeClass('animated tada');
	}
);