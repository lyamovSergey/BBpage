$(function(){
	// slider swirpe
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
	// slider small data
	var experts = {
		1: {
			foto: $('#1 img').attr('src'),
			name: $('#1 h3').text(),
			linkFB: $('#1 .linkF').attr('href'),
			linkYB: $('#1 .linkY').attr('href'),
			linkIG: $('#1 .linkI').attr('href'),
			description: $('#1 p').text()

		},
		2: {
			foto: $('#2 img').attr('src'),
			name: $('#2 h3').text(),
			linkFB: $('#2 .linkF').attr('href'),
			linkYB: $('#2 .linkY').attr('href'),
			linkIG: $('#2 .linkI').attr('href'),
			description: $('#2 p').text()

		},
		3: {
			foto: $('#3 img').attr('src'),
			name: $('#3 h3').text(),
			linkFB: $('#3 .linkF').attr('href'),
			linkYB: $('#3 .linkY').attr('href'),
			linkIG: $('#3 .linkI').attr('href'),
			description: $('#3 p').text()

		},
	}

	
		
			jQuery.each(experts, function(i, val) {
				$('.expert' + i + ' .main-foto').attr('src', val.foto);
				$('.expert' + i + ' h1').text(val.name);
				$('.expert' + i + ' .description__linkF').attr('src', val.linkFB);
				$('.expert' + i + ' .description__linkY').attr('src', val.linkYB);
				$('.expert' + i + ' .description__linkI').attr('src', val.linkIG);
				$('.expert' + i + ' p').text(val.description);
				
		     });
		
	

	// slider large data
	$('.experts__item').on('click', function(){
		var img = $(this).find('img').attr('src');
		var name =$(this).find('h3').text();
		var linkFacebook = $(this).find('.hideBlock .linkF').attr('href');
		var linkYoutube = $(this).find('.hideBlock .linkY').attr('href');
		var linkInstagram = $(this).find('.hideBlock .linkI').attr('href');
		var description = $(this).find('.hideBlock .about__expert').text();
		var exp = $(this).attr("id");
		$(this).addClass('active')
			.siblings()
			.removeClass('active');
		$("#marker" + exp).addClass('active_marker')
			.siblings()
			.removeClass('active_marker');	
	$('.experts__description-title .main-foto').attr('src', img);	
	$('.textBox').find('h1').text(name);
	$('.description__linkF').attr('href', linkFacebook);
	$('.description__linkY').attr('href', linkYoutube);
	$('.description__linkI').attr('href', linkInstagram);
	$('.experts__descriptionText').text(description);
		console.log(exp);
	});


	$('#showProgramm').on('click', function(){
		var height = $('.course__item').outerHeight() * 3.5;
		if( $('.wrapper_hide').height() != 0 ) {
			$('.wrapper_hide').animate({height: 0 + "px"}, 1000);
		}else{
			$('.wrapper_hide').animate({height: height + "px"}, 1000);
		}
		console.log(height)
	});
});