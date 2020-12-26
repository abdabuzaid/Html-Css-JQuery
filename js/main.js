/*global $, document, window*/

$(document).ready(function () {

    "use strict";

    $(window).on('scroll', function () {

    /*Start Scroll Top*/

    if ($(this).scrollTop() >= 700) {

        if ($('.scroll-top').is(":hidden")) {

            $('.scroll-top').fadeIn(1000);

        } 
       
    } else {

        $('.scroll-top').fadeOut(1000);
    }

    $('.scroll-top').on('click', function () {

        $('html, body').animate({

            scrollTop: 0
            
        }, 1000);


    });

    /*End Scroll Top */

        /*Start NavBar*/

        if ($(this).scrollTop() >= 100) {

            $('.navbar').css({
                backgroundColor: '#FFF',
                borderBottom: '1px solid #EEE'
            });

        } else {

            $('.navbar').css({
                backgroundColor: 'transparent',
                borderBottom: 'none'
            });
        }

    });


    $('.navbar ul li').on('click', function () {

        $(this).addClass('active').siblings('li').removeClass('active');
    });

    $('.navbar ul li a').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('.' + $(this).data('a')).offset().top

        }, 1000);

    });

    $('.navbar button').on('click', function () {

        $('.navbar button i').toggleClass('fa-bars fa-times');

    });

    /*End NavBar*/
    
});