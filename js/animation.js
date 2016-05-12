ANIMATION_SPEED = 400;

$.easing.def = "easeInOutCubic";

$(function(){
	var $bridalParty = $('#bridal-party');
	$('.groomsmen', $bridalParty).hide();
	$('.bridesmaids', $bridalParty).hide();
	$('#festivities')
		// .on('click', function(){
  //   		lazyLoad('#festivities');
  //   	})
		.on('click', '.live-map', function(e){
			e.preventDefault();
			$('#festivities').children().not('.map, .close').fadeOut();
		})
		.on('click', '.close', function(e){
			e.preventDefault();
			$('#festivities').children().not('.map, .close').fadeIn();
		});


	$bridalParty
		.on('click', '.cover-right', function(e){
			e.preventDefault();
			$('.bridesmaids', $bridalParty).hide();
			$('.groomsmen', $bridalParty).show();
			$('.cover-left', $bridalParty).animate({ left: '-100%' }, ANIMATION_SPEED);
			$('.cover-right', $bridalParty).animate({ left: '100%' }, ANIMATION_SPEED);
			$('.back', $bridalParty).animate({ bottom: '20%'}, ANIMATION_SPEED);
			// $('.icn-bridal-party', $bridalParty).animate({ bottom: '-140px' }, ANIMATION_SPEED, function(){
			// 	$(this).animate({ bottom: '-338px' }, ANIMATION_SPEED, function(){
			// 		$('.cover-left', $bridalParty).animate({ left: '-650px' }, ANIMATION_SPEED);
			// 		$('.cover-right', $bridalParty).animate({ right: '-650px' }, ANIMATION_SPEED);
			// 		$('.icn-back', $bridalParty).animate({ bottom: '-130px' }, ANIMATION_SPEED);
			// 	});
		})
		.on('click', '.cover-left', function(e){
			e.preventDefault();
			$('.groomsmen', $bridalParty).hide();
			$('.bridesmaids', $bridalParty).show();
			$('.cover-left', $bridalParty).animate({ left: '-100%' }, ANIMATION_SPEED);
			$('.cover-right', $bridalParty).animate({ left: '100%' }, ANIMATION_SPEED);
			$('.back', $bridalParty).animate({ bottom: '20%'}, ANIMATION_SPEED);
			// $('.icn-bridal-party', $bridalParty).animate({ bottom: '-140px' }, ANIMATION_SPEED, function(){
			// 	$(this).animate({ bottom: '-338px' }, ANIMATION_SPEED, function(){
			// 		$('.cover-left', $bridalParty).animate({ left: '-650px' }, ANIMATION_SPEED);
			// 		$('.cover-right', $bridalParty).animate({ right: '-650px' }, ANIMATION_SPEED);
			// 		$('.icn-back', $bridalParty).animate({ bottom: '-130px' }, ANIMATION_SPEED);
			// 	});
		})
		.on('click', '.back', function(e){
			e.preventDefault();
			$('.back', $bridalParty).animate({ bottom: '-120px' }, ANIMATION_SPEED, function(){
				$(this).animate({ bottom: '-20%' }, ANIMATION_SPEED, function(){
					$('.cover-left', $bridalParty).animate({ left: '0px' }, ANIMATION_SPEED);
					$('.cover-right', $bridalParty).animate({ left: '50%' }, ANIMATION_SPEED);
					$("input:radio").attr("checked", false);
					// $('.icn-bridal-party', $bridalParty).animate({ bottom: '-150px' }, ANIMATION_SPEED, function(){
					// 	$('.bridesmaides, .groomsmen', $bridalParty).hide();
					// });
				});
			});
		})
})