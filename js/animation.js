ANIMATION_SPEED = 400;

$.easing.def = "easeInOutCubic";

$(function(){
	var stickyHeaderTop = $('#navigation').offset().top;

	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > stickyHeaderTop) {
        $('#navigation').addClass('fixed');
        $('#navigation').removeClass('absolute');
    } else {
        $('#navigation').removeClass('fixed');
        $('#navigation').addClass('absolute');
    }
	});


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
		.on('click', '.cover-right a', function(e){
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
		.on('click', '.cover-left a', function(e){
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
		});

		$('.slides-container').slidesjs({
        width: 940,
        height: 528,
        navigation: {
          active: false,
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        play: {
        	// [boolean] Generate the play and stop buttons.
      		active: false,
	      	effect: "fade",
	        // [string] Can be either "slide" or "fade".
	      	interval: 8000,
	        // [number] Time spent on each slide in milliseconds.
	      	auto: true,
	        // [boolean] Start playing the slideshow on load.
	        // [boolean] show/hide stop and play buttons
	      	pauseOnHover: true,
	        // [boolean] pause a playing slideshow on hover
	      	restartDelay: 2500
	        // [number] restart delay on inactive slideshow
    	},
        effect: {
          fade: {
            speed: 400
          }
        }
      });
})