/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-collapse'
});*/

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



  
    // Closes the sidebar menu

    /*$("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });*/

    //Opens the modals
    $(".portfolio-link").click(function(e) {
        e.preventDefault();
        var mod_id =  $(this).attr('id').substr($(this).attr('id').length - 1);
        $("#portfolioModal"+mod_id).modal('show');
        if(mod_id == 7){
        	$('.phys-cara').carousel();
        }else{
        	$('.photo-cara').carousel();
        }
        
    });

    


    $("#carousel-photo, #carousel-phys").hover(function(e){
        $(".carousel-indicators").fadeIn(500);

    });

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
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

         
    });