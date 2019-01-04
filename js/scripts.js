
$(document).ready(function() {

	AnimateItem();
	FadeHover();
	ScrollTop();
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
			console.log(HEYO);
		});
	  return false;
	});

}

function ScrollTopNoRedirect(){
	$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
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
