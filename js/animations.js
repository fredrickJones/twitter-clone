$(document).ready(function () {
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css('height', '5em');
		$('#tweet-controls').show();
	});

	$('.tweet-compose').on('keyup', function() {
		var remaining = 140;
		var typed = $(this).val();
		$('#char-count').text(remaining - typed.length);
		if (remaining - typed.length <= 10) {
			$('#char-count').css('color', 'rgba(178, 6, 6, 1)');
		} else {
			$('#char-count').css('color', 'rgba(153, 153, 153, 1)');
		};
	});



});