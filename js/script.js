$(document).ready(function (){


	//HEADER GNB DEPTH2
	$('.w-header .header__left nav > ul > li').on('mouseenter',function(){
		$(this).find('.gnb__depth2').stop().slideDown(300);
	});
	$('.w-header .header__left nav > ul > li').on('mouseleave',function(){
		$(this).find('.gnb__depth2').stop().slideUp(300);
	});


	//MOBILE HEADER 
		$('.button--m-header').on('click',function(){
			$('.button--m-header').toggleClass('active');
			$('.m-header__right').toggleClass('open');
		});


		$('.m-header__menu > ul > li').on('click',function(){
			const i = $(this).index();
			$('.m-header__menu > ul > li').removeClass('current');
			$('.left-menu > ul > li').eq(i).addClass('current');
			$('.right-menu > ul > li').eq(i).addClass('current');
		});	

		$('.m-header__nav .gnb__depth2 li.gnb__have-depth3').on('click',function(){
			$(this).children('.gnb__depth3').stop().slideToggle(300);
		});


		$(window).on('resize',function(){
			const i = $(this).index();
			$('.m-header__nav .gnb__depth2').css({'display':'block'})
		
		});


	// SCROLL EFFECT
	$(window).scroll(function(){
		//SCROLL EFFECT
		let windowScrollTop = $(window).scrollTop();
		if(windowScrollTop > 0) {
			$('w-header').addClass('scrollOn');
			$('.button--top').addClass('active');
		} else {
			$('w-header').removeClass('scrollOn');
			$('.button--top').removeClass('active');
		}

	});


	// BUTTON TOP
	$('.button--top').click(function(){
		$('html,body').stop().animate({scrollTop:0});
	});


	// SUB VISUAL TEXT ANIMATION
	$('.sub-visual__text').addClass('active');



	// LNB
	function Size_pc(){
		// lnb
		$('.lnb-wrap .lnb__depth2-list > li ').on('click',function(){
			$('.lnb-wrap .lnb__depth2-list > li ').removeClass('current');
			$(this).addClass('current');

			if ($('.lnb-wrap .lnb__depth2-list > li').hasClass('current')){
				$('.lnb__depth3-list').css({'display':'none'});			
				$(this).children('.lnb__depth3-list').css({'display':'block'});			

			} 
		});

	}

	function Size_mobile(){

		// lnb
		$('.lnb-wrap .lnb__depth2-list > li ').on('click',function(){
			$('.lnb-wrap .lnb__depth2-list > li ').removeClass('current');
			$(this).addClass('current');

			$('.lnb__depth3-list').stop().slideUp(300);
			$(this).children('.lnb__depth3-list').stop().slideToggle(300);
		});



	}



   let screen_size = $(window).width();
   if(screen_size > 1024){
	   $('.lnb-wrap .lnb__depth2-list').off('click');
	   $('.lnb-wrap .lnb__depth2-list > li.lnb__have-depth3').off('click');

      Size_pc();
      
   }else{
	   $('.lnb-wrap .lnb__depth2-list').off('click');
	   $('.lnb-wrap .lnb__depth2-list > li.lnb__have-depth3').off('click');
      Size_mobile();
      
   }



	$(window).resize(function(){
	   let screen_size = $(window).width();
	   if(screen_size >= 1024){

		   $('.lnb-wrap .lnb__depth2-list').off('click');
		   $('.lnb-wrap .lnb__depth2-list > li.lnb__have-depth3').off('click');
		Size_pc();
	   
	   }else{
		   
		   $('.lnb-wrap .lnb__depth2-list').off('click');
		   $('.lnb-wrap .lnb__depth2-list > li.lnb__have-depth3').off('click');

		  Size_mobile();
	   }
	});



});