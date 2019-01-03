
$(document).ready(function() {

	$(function() { $('body').hide().show(); });

	"use strict";


	FirstLoad();
	LazyLoad();
	HeroSection();
	AjaxLoad();





	Lightbox();
	AppearIteam();
	BackToTop();












});

$(window).on('load', function() {
	$('#return-to-top').click(function() {      // When arrow is clicked
				console.log("working!");
				$('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1015);
    });


		$('#fadeandscale').popup({
				pagecontainer: '.container',
				transition: 'all 0.3s'
		});

});

function changeDate(){


	x=document.getElementsByClassName("copyright");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Updated April 2018";    // Change the content
    }
}



/*--------------------------------------------------
Function Scroll to Top
---------------------------------------------------*/
function scrollTop(){
	$('#return-to-top').click(function() {      // When arrow is clicked
				console.log("working!");
				$('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1015);
    });
}



/*--------------------------------------------------
Function FirstLoad
---------------------------------------------------*/

	function FirstLoad() {

		$("html,body").animate({scrollTop: 0}, 1);

		$('.item-image').each(function() {
			var image = $(this).data('src');

			$(this).css({
				'background-image': 'url(' + image + ')'
			});
		});

		$('#menu-burger, #nav-container, #black-fade').on('click', function() {
			$('#menu-burger').toggleClass('open');
		});

		$('.project-next').on('click', function() {
			$('#main').addClass('hidden');
			$('header').addClass('menu-open');
		});

		$('a.ajax-link').on('click', function() {
			$(".page-overlay").addClass("from-bottom");
			$('#main').addClass('hidden');

		});

		$('.nav-title').on('mouseenter', function() {
			$(".nav-project-title").addClass('hover');
		}).on('mouseleave', function() {
			$(".nav-project-title").removeClass('hover');
		});

		$('#open-filters, .close-page-action, #shareproject').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
		});

		$("header.solid, #image-border-left, #image-border-right, #menu-overlay").css('background', function () {
			return $("#page-content").data('bgcolor');
		});

		$("h1, h2, h3, h4, h5, h6, .hero-title, #open-filters, #open-share, #backtoworks, [data-tooltip], .light-content a.link, .post-title, .blog-numbers").css('color', function () {
			return $("#page-content").data('textcolor');
		});

		if( jQuery('.tooltip-hover').length > 0 ){

			var tooltips = document.querySelectorAll('.item-overlay');

			window.onmousemove = function (e) {
				var x = (e.clientX + 20) + 'px',
					y = (e.clientY + 20) + 'px';
				for (var i = 0; i < tooltips.length; i++) {
					tooltips[i].style.top = y;
					tooltips[i].style.left = x;
				}
			};

		}

		$('a.project-link').on('click', function() {
			$('#portfolio').addClass('hidden');
			setTimeout( function(){
				$(".page-overlay").addClass("from-bottom");
			} , 100 );

		});

		$('.next-project').hover(function(){
			$('.project-links').addClass('hover');
		},
		function(){
			$('.project-links').removeClass('hover');
		});



	}// End First Load

/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/

	function HeroSection() {


		var HeroCaption = document.getElementById('hero-caption');
		var windowScrolled;


		window.addEventListener('scroll', function windowScroll() {
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ($('#hero-styles').hasClass("scale-onscroll")) {
				HeroCaption.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
			}
			if ($('#hero-styles').hasClass("parallax-onscroll")) {
				HeroCaption.style.transform = 'translate3d(' + windowScrolled / -2.5 + 'px, 0, 0)';
			}
			if ($('#hero-styles').hasClass("opacity-onscroll")) {
				HeroCaption.style.opacity =  (1 - (windowScrolled/20) / 20);
			}

			if( $('#hero-image').length > 0 ){
				if($(this).scrollTop() >= $('#hero-image').offset().top) {
					$("#hero-image").addClass("bgrelative");
				} else {
					$("#hero-image").removeClass("bgrelative");
				}
			}
		});
		if ($('#hero-styles').hasClass("normal-onscroll")) {
			$('#hero').addClass('normal');
			$('#hero-height').addClass('hidden');
		}

		$('.hero-title, .hero-subtitle, .overlay-hover .item-title, .overlay-hover .item-cat').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
	}//End Hero Section



/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {

		setTimeout(function(){
			$('body').removeClass('hidden');
		} , 100 );

		if( $('#portfolio').length > 0 ){

			$('body').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
							setTimeout(function(){
								$("#all").trigger('click');
							} , 150 );
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});

		} else if( $('#hero-image').length > 0 ){

			$('#hero-image').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});

		} else {

			setTimeout( function(){
				HeroColor();
				$(".page-overlay").addClass("from-bottom-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
				} , 800 );
			} , 100 );
		}

	}// End Lazy Load



/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/

	function AjaxLoad() {

		jQuery(document).ready(function(){
		  var isAnimating = false,
			newLocation = '';
			firstLoad = false;

		  //trigger smooth transition from the actual page to the new one
		  $('main').on('click', '[data-type="page-transition"]', function(event){
			event.preventDefault();
			//detect which page has been selected
			var newPage = $(this).attr('href');
			//if the page is not already being animated - trigger animation
			if( !isAnimating ) changePage(newPage, true);
			firstLoad = true;
		  });

		  //detect the 'popstate' event - e.g. user clicking the back button
		  $(window).on('popstate', function() {
			if( firstLoad ) {
			  /*
			  Safari emits a popstate event on page load - check if firstLoad is true before animating
			  if it's false - the page has just been loaded
			  */
			  var newPageArray = location.pathname.split('/'),
				//this is the url of the page to be loaded
				newPage = newPageArray[newPageArray.length - 1];

			  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
			}
			firstLoad = true;
			});

			function changePage(url, bool) {
			isAnimating = true;
			// trigger page animation
			$('body').addClass('page-is-changing');
			$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				loadNewContent(url, bool);
			  newLocation = url;
			  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
			//if browser doesn't support CSS transitions
			if( !transitionsSupported() ) {
			  loadNewContent(url, bool);
			  newLocation = url;
			}
			}

			function loadNewContent(url, bool) {
				url = ('' == url) ? 'index.html' : url;

			var section = $('<div class="cd-main-content "></div>');


			section.load(url+' .cd-main-content > *', function(event){
			  // load new content and replace <main> content with the new one

			  $('main').html(section);

				$('header').addClass('initial');
				$('html, body').scrollTop(0);

			  //if browser doesn't support CSS transitions - dont wait for the end of transitions
			  var delay = ( transitionsSupported() ) ? 30 : 0;
			  setTimeout(function(){
				//wait for the end of the transition on the loading bar before revealing the new content
				$('body').removeClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				  isAnimating = false;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});

				FirstLoad();
				HeroSection();
				LazyLoad();
				scrollTop();


				AppearIteam();
				BackToTop();



				if( !transitionsSupported() ) isAnimating = false;
			  }, delay);
			  if(url!=window.location && bool){
				window.history.pushState({path: url},'',url);
			  }
				});
		  }

		  function transitionsSupported() {
			return $('html').hasClass('csstransitions');
		  }
		});


	}// End Ajax Load

















/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/

	function FooterAppear() {

		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();

				if (scroll >= 300) {
					$(".progress-page, #page-action-holder").addClass('is-active');
				} else {
					$(".progress-page, #page-action-holder").removeClass('is-active');
				}
			});
		}

		var lastScroll = 0;

		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$(".progress-page, #page-action-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$(".progress-page, #page-action-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});

  }//End FooterAppear





/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/

	function Sliders() {

		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 300,
			items:1,
		});

		if( $('.slider').length > 0 ){
			setTimeout(function(){
				$('.owl-prev').append('<span>Prev</span>');
				$('.owl-next').append('<span>Next</span>');
					var tooltips  = document.querySelectorAll('.owl-controls span');
					window.onmousemove = function (e) {
						var x = (e.clientX + 30) + 'px',
							y = (e.clientY - 30) + 'px';
						for (var i = 0; i < tooltips.length; i++) {
							tooltips[i].style.top = y;
							tooltips[i].style.left = x;
						}
					};
			} , 50 );
		}

		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			nav: true,
			navSpeed: 600,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});

		if( $('.text-carousel').length > 0 ){
			$(".text-carousel").owlCarousel({
				loop:true,
				dots:true,
				dotsEach: 1,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoplayHoverPause:true
			});
		}


	}//End Sliders



/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/

	function Lightbox() {

		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',
			gallery: {
			  enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

	}//End Lightbox




/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/

	function AppearIteam() {

		$('.has-animation').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});
			});
		});

	}//End AppearIteam



/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/

	function BackToTop() {

		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});

		$(".flexnav").flexNav({ 'animationSpeed' : 0 });

	}//End BackToTop
