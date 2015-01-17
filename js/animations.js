$(document).ready(function () {
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css('height', '5em');
		$('#tweet-controls').show();
	});

	$('#tweet-content .tweet-compose').on('keyup', function() {
		var remaining = 140;
		var typed = $(this).val();
		$('#char-count').text(remaining - typed.length);
		if (remaining - typed.length <= 10) {
			$('#char-count').css('color', 'rgba(178, 6, 6, 1)');
		} else {
			$('#char-count').css('color', 'rgba(153, 153, 153, 1)');
		};
		if (typed.length > 140) {
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		};
		//$('#tweet-content .tweet-compose').keypress(function(e) {
			//var tval = $('.tweet-compose').val(),
    		//tlength = tval.length,
        	//set = 141,
        	//remain = parseInt(set - tlength);
        	//$('#char-count').text(remain);
        	//if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        		//$('#tweet-content .tweet-compose').val((tval).substring(0, tlength - 1))
    		//};
		//});
	});

	//$()



});