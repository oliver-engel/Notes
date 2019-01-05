
$(document).ready(function() {

	AnimateItem();
	FadeHover();
	ScrollTop();
	ScrollToSection();
	ScrollTopNoRedirect()



});


/*--------------------------------------------------
FUNCTION ScrollTop

Used for fading transitions between pages.
---------------------------------------------------*/


function ScrollTop(){
	$("a[data-scroll='#top']").click(function() {
		var link = this.getAttribute('href');
	  $("html, body").animate({ scrollTop: 0 }, "slow", function(){
			window.location.href = link;
			console.log("test");
		});
	  return false;
	});

}

function ScrollTopNoRedirect(){
	$("a[data-what='what']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
	console.log("is anybody there?");
  return false;
});
}


function ScrollToSection(){
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		}, 500, 'linear');
	});
}






/*--------------------------------------------------
FUNCTION AnimateItem

Animates in selected items on page load.
---------------------------------------------------*/

	function AnimateItem() {

		$('.has-animation').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});
			});
		});

	}


	/*--------------------------------------------------
	FUNCTION FadeHover

	Used for the home page hover effects.
	---------------------------------------------------*/

		function FadeHover() {
			$('.fadeHover').hover(

			function () {
					$('.fadeHover').stop().fadeTo(0.3, 0.3);
					$(this).stop().fadeTo(0.3, 1);
			},
			function () {
					$('.fadeHover').stop().fadeTo(0.3, 1);
			});
		}
