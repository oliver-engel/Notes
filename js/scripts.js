
$(document).ready(function() {

	AppearItem();
	FadeHover();

});



/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/

	function AppearItem() {

		$('.has-animation').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});
			});
		});

	}//End AppearItem


	/*--------------------------------------------------
	Function FadeHover
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
