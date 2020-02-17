$(document).ready(function(){

	
	const headerHeight = $('.header').css('height');

	$('.choice-list .activ').click(function(e){
		e.preventDefault();
		$('.description-desc').fadeOut(function(){
			$('.description-activite').fadeIn(1000);
		});
	});

	$('.choice-list .desc').click(function(e){
		e.preventDefault();
		$('.description-activite').fadeOut(function(){
			$('.description-desc').fadeIn(1000);
		});
	});

	$('.activ-list i').click(function(){
		$($(this).data('f')).slideToggle(300);
		$(this).toggleClass('fa-minus');
		$(this).parent().siblings().find('div').hide();
		for(i=0; i<3; i++){
			$($(this).parent().siblings().find('i')[i]).attr('class', 'fa fa-plus')
		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > $('.s1').offset().top) {
			$('.return-to-top').css({
				'display': 'flex',
				'justify-content': 'center',
				'align-items': 'center'
			}).show(300);
		}else if ($(window).scrollTop() < $('.s1').offset().top) {
			$('.return-to-top').hide(300);
		}
		if ($(window).scrollTop() > $('.s1').offset().top){
			$('.navbar').fadeIn(400);
		}else if($(window).scrollTop() < $('.s1').offset().top){
			$('.navbar').fadeOut(400);
		}
	});

	$('.sandwich').click(function(){
		$('.sand').hide();
		$('.sandwich-content').removeClass('hidden').addClass('visible');
		$('.sandwich-content .sand').delay(100).fadeIn(500);
		$(this).fadeOut(300, function(){
			$($(this).data('close')).fadeIn(300).css('z-index', '99999');
		});
	});

	$('.sandwich-close').click(function(){
		$(this).fadeOut(300, function(){
			$('.sandwich').fadeIn(300);
		});
	});

	$('.sandwich-close').click(function(){

		$('.sandwich-content').removeClass('visible').addClass('hidden');

	});

	$('.header_navbar ul li a, .navbar ul li a').click(function(){
		$($(this).data('club')).siblings().fadeOut(300);
		$($(this).data('club')).delay(300).fadeIn(300);
		$($(this).data('club-btn')).parent().siblings().find('a').fadeOut(300);
		$($(this).data('club-btn')).delay(400).fadeIn(300);
		
	});

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);


	$('.options h2:first-child').click(function(){
		var aboutUs = $(this).data('about');
		var nbr = $(this).parent().css('left');
		$(this).parent().animate({
			right: '40%'
		},500,function(){
			$(aboutUs).css({
			left: '20%'
		});
		});
	});

	$('.times').click(function(){
		$('.about-us').animate({
			left: '100%'
		}, function(){
			$('.options').css({
				right: '0'
			});
		});
	});

});



		


// $(this).data('custom').slideUp(300, function(){

// 			$('.choice-list .desc').slideDown(300);

// });