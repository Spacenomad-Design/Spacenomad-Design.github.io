(function ($) {
	var $blankATags = $('a[href^="#"]'),
		$body = $('html, body'),
		settings = {
			duration: 500
		};

	function onBlankAClick (event) {
		var $this = $(this),
			href = $this.attr('href'),
			$target = $(href);

		if ($target.length > 0) {
			event.preventDefault();
			$body.animate({
				scrollTop: $target.offset().top
			}, settings.duration);
		}
	}

	$(document).ready(function () {
		$blankATags.on('click', onBlankAClick);
	});
})(jQuery);
