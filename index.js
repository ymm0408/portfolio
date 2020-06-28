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

	$(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }

        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});
