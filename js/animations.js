/* global $ */
$(document).ready(function () {
	'use strict';

	var buildTweet = function(fullName, userName, avatar, text) {
		return $('<div class="tweet">').append(buildTweetContent(fullName, userName, avatar, text));
	};

	var buildTweetContent = function(fullName, userName, avatar, text) {
		return $('<div class="content">').append('' +
			'<img class="avatar" src="' + avatar + '" />' +
			'<strong class="fullname">' + fullName + '</strong>' +
			'<span class="username">@' + userName + '</span>' +
			'<p class="tweet-text">' + text + '</p>' 
		)
		.append(buildTweetActions())
		.append(buildTweetStats())
		.append(buildTweetReply());
	};

	var buildTweetActions = function() {
		return '' +
			'<div class="tweet-actions">' +
				'<ul>' +
					'<li><span class="icon action-reply"></span> Reply</li>' +
					'<li><span class="icon action-retweet"></span> Retweet</li>' +
					'<li><span class="icon action-favorite"></span> Favorite</li>' +
					'<li><span class="icon action-more"></span> More</li>' +
				'</ul>' +
			'</div>';
	};

	var buildTweetStats = function() {
		return '' +
			'<div class="stats">' +
				'<div class="retweets">' +
					'<p class="num-retweets">0</p>' +
					'<p>RETWEETS</p>' +
				'</div>' +
				'<div class="favorites">' +
					'<p class="num-favorites">0</p>' +
					'<p>FAVORITES</p>' +
				'</div>' +
				'<div class="users-interact">' +
					'<div>' +
						'<img src="img/funwatercat.jpg" />' +
						'<img src="img/vklimenko.jpg" />' +
					'</div>' +
				'</div>' +
				'<div class="time">' +
					'1:04 PM - 19 Sep 13' +
				'</div>' +
			'</div>';
	};

	var buildTweetReply = function() {
		return '' +
		'<div class="reply">' +
			'<img class="avatar" src="img/alagoon.jpg" />' +
			'<textarea class="tweet-compose" placeholder="Reply to @FredrickWJones"/></textarea>' +
		'</div>';
	};

	$('.tweet-compose').on('click', function() {
		$(this).css('height', '5em');
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
		}
		if (typed.length > 140) {
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		}
	});


	$('#tweet-submit').on('click', function(e) {
		e.preventDefault();
		//console.log('test tweet');
		var text = $('#tweet-content .tweet-compose').val();
		$('#stream').prepend(buildTweet('Fredrick Jones', 'FredrickWJones', 'img/alagoon.jpg', text));


		// $('#stream .tweet .content').append('#profile-summary', '#tweet-content', '.tweet-actions', '.stats', '.time', '.reply');
	});
});