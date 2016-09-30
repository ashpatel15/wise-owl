/*
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var wow = new WOW(
    {
        boxClass:     'wowload',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true        // act on asynchronously loaded content (default is true)
      }
    );
    
 
var initializePageScroll = function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        closeMenu();
        event.preventDefault();
    });
};

var initializeMainNav = function() {
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
}

var closeMenu = function(){
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
};

$(document).on('turbolinks:load', function(event) {
    initializePageScroll();
    initializeMainNav();
    // wow.init();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    initializePageScroll();

    wow.init();
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });


    initializeMainNav();

    






})(jQuery); // End of use strict
// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-fixed-top'
});*/

// $('.carousel').swipe( {
//      swipeLeft: function() {
//          $(this).carousel('next');
//      },
//      swipeRight: function() {
//          $(this).carousel('prev');
//      },
//      allowPageScroll: 'vertical'
//  });

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	 // ÷console.log("asdasd");

	});



	$(".navbar-toggle").click(function(e) {
	        e.preventDefault();
	        $("#navbar-collapse").toggleClass("active");

	    });


  
    // Closes the sidebar menu

    closeMenu();

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    //Opens the modals
    $(".portfolio-link").click(function(e) {

        var mod_id =  $(this).attr('id').substr($(this).attr('id').length - 1);
        $("#portfolioModal"+mod_id).modal('show');
        if(mod_id == 7){
        	$('.phys-cara').carousel();
        }else{
        	$('.photo-cara').carousel();
        }

        e.preventDefault();
        return false;
    });

    


    // $("#carousel-photo, #carousel-phys").hover(function(e){
    //     $(".carousel-indicators").fadeIn(1000);

    // });

    var overiFrame = false;

    $('#carousel-phys iframe').hover( function() {
        overiFrame = true;
    }, function() {
        overiFrame = false;
    });

    $(window).blur( function() {
        if(overiFrame){
            $('#myCarousel').carousel('pause');
        }

    });
	
	$(".right").click(function(e){
		e.preventDefault();
		
         $("#carousel-photo").carousel('next');
         $("#carousel-phys").carousel('next');
         
      });
      // Cycles to the next item
      $(".left").click(function(e){
      	e.preventDefault();
      	
        $("#carousel-photo").carousel('prev');
        $("#carousel-phys").carousel('prev');
        
      });
   
   


	/*$('.carousel').carousel({
        interval: 3000
    })*/
    // Scrolls to the selected menu item on the page
    // $(function() {
    //     $('a[href*=#]:not([href=#])').click(function() {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000);
    //                 return false;
    //             }
    //         }
    //     });

         
    // });