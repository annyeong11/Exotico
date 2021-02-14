jQuery(function($) {
    "use strict";

//Header Slider
    if($('.home_slider').length) {
         $('.home_slider').slick({
        vertical: true,
        arrows: false,
        dots: true,
        });  
    }
    
//Popup Video
    if($('.open_video').length) {
        $('.open_video').magnificPopup({
        type: 'iframe'
        });
    }


//Carousel Slider
    if ($('.shop_carousel').length) {
        $('.shop_carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.arrows'),
        prevArrow: "<div class='left'><i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='right'><i class='fas fa-arrow-right'></i></div>",
        }); 
    }   
    

//Gallery Big Image

    if($('.test_gallery').length) {
        $('.test_gallery').magnificPopup({
        type: 'image',
 		closeOnContentClick: true,
 		mainClass: 'mfp-img-mobile',
 		image: {
 			verticalFit: true
 		}	
 	    });
    }


    // Twitter Slider
    if($('.tweeter_content').length) {
        $('.tweeter_content').slick({
        vertical: true,
        appendArrows: $('.top_footer_arrows'),
        prevArrow: "<span class=\"tweet_up\"><i class=\"fas fa-arrow-up\"></i></span>",
        nextArrow: "<span class=\"tweet_down\"><i class=\"fas fa-arrow-down\"></i></span></div>",
        });  
    }

});


// $(document).ready(function() {
// 	$('.testimonial_gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
// });




