
$(function (){

	"use strict";

    var wind = $(window);

     // navbar moveit
    var open = false,
        duration = 0.9,
        timing = 'cubic-bezier(0.7, 0, 0.3, 1)';
    Moveit.put(first, {
        start: '0%',
        end: '14%',
        visibility: 1
    });
    Moveit.put(second, {
        start: '0%',
        end: '11.5%',
        visibility: 1
    });
    Moveit.put(middle, {
        start: '0%',
        end: '100%',
        visibility: 1
    });
    $('.navbar-toggle').click(function() {
        if (!open) {
            Moveit.animate(first, {
                visibility: 1,
                start: '78%',
                end: '93%',
                duration: duration,
                delay: 0,
                timing: timing
            });
            Moveit.animate(middle, {
                visibility: 1,
                start: '50%',
                end: '50%',
                duration: duration,
                delay: 0,
                timing: timing
            });
            Moveit.animate(second, {
                visibility: 1,
                start: '81.5%',
                end: '94%',
                duration: duration,
                delay: 0,
                timing: timing
            });
        } else {
          Moveit.animate(middle, {
                visibility: 1,
                start: '0%',
                end: '100%',
                duration: duration,
                delay: 0,
                timing: timing
            });
                Moveit.animate(middle, {
                visibility: 1,
                duration: duration,
                delay: 0,
                timing: timing
            });
          Moveit.animate(first, {
                visibility: 1,
                start: '0%',
                        end: '14%',
                duration: duration,
                delay: 0,
                timing: timing
            });
          Moveit.animate(second, {
                visibility: 1,
                start: '0%',
                        end: '11.5%',
                duration: duration,
                delay: 0,
                timing: timing
            });
        }
        open = !open;
    });
    
    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 400){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });

     //smooth scroll
    $('.navbar .navbar-nav').singlePageNav({
        speed:1500,
        currentClass:'active',
        offset:60
    });

    //smooth button scroll
    $('header .smoth-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 20
        }, 1500 );

    }); 

    // typejs
    $('.caption h1 span').typed({
        strings: ["Javascript","HTML5","CSS3","jQuery","Bootstrap","Node.js","PHP","UI/UX","MySQL"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });


    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    

    // progress bar
    wind.on('scroll', function () {
        $(".progress-main .progress-bar").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    // owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });


    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });


     // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // magnificPopup
    $('.gallery .v-middle').magnificPopup({
      delegate: 'a',
      type: 'image'
    });

});

    $(window).on("load",function (){

        $(".loading").fadeOut(500);


    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })    
});
