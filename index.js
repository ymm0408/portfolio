$(function(){
	$('.profile-btn').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top;

		$('html,body').animate({
			'scrollTop':position
		},'slow');
	});

	$('.skill-btn').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top;

		$('html,body').animate({
			'scrollTop':position
		},'slow');
	});

	$('.works-btn').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top;

		$('html,body').animate({
			'scrollTop':position
		},'slow');
	});

	$('.contact-btn').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top;

		$('html,body').animate({
			'scrollTop':position
		},'slow');
	});

	$(window).scroll(function (){
	  $('.fadein').each(function(){
	            var position = $(this).offset().top;
	            var scroll = $(window).scrollTop();
	            var windowHeight = $(window).height();
	            if (scroll > position - windowHeight + 300){
	              $(this).addClass('active');
	            }
	        });
	    });

	$('*').fadeIn(2000);
});
