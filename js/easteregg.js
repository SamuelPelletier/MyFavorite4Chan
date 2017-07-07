/**
 * Created by samue on 07/07/2017.
 */

var timeout;

$("#fingerprint").hover(function () {
    timeout = setTimeout(function () {
        $("#fingerprint").remove();
        $('body').append('<div class="container">' +
            '<div class="sky"></div>' +
            '<div class="star star0"></div>' +
            '<div class="star star1"></div>' +
            '<div class="star star2"></div>' +
            '<div class="star star3"></div>' +
            '<div class="star star4"></div>' +
            '<div class="star star5"></div>' +
            '<div class="star star6"></div>' +
            '<div class="star star7"></div>' +
            '<div class="star star8"></div>' +
            '<div class="star star9"></div>' +
            '<div class="star star10"></div>' +
            '<div class="star star11"></div>' +
            '<div class="star star12"></div>' +
            '<div class="star star13"></div>' +
            '<div class="star star14"></div>' +
            '<div class="star star15"></div>' +
            '<div class="star star16"></div>' +
            '<div class="star star17"></div>' +
            '<div class="star star18"></div>' +
            '<div class="star star19"></div>' +
            '<div class="shootingstar shootingstar0"></div>' +
            '<div class="shootingstar shootingstar1"></div>' +
            '<div class="shootingstar shootingstar2"></div>' +
            '<div class="sun">' +
            '<div class="inner"></div>' +
            '</div>' +
            '<div class="fuji">' +
            '<div class="snowcap"></div>' +
            '</div>' +
            '<div class="cloud cloud0"></div>' +
            '<div class="cloud cloud1"></div>' +
            '<div class="cloud cloud2"></div>' +
            '<div class="cloud cloud3"></div>' +
            '<div class="cloud cloud4"></div>' +
            '<div class="cloud cloud5"></div>' +
            '<div class="cloud cloud6"></div>' +
            '<div class="cloud cloud7"></div>' +
            '<div class="cloud cloud8"></div>' +
            '<div class="cloud cloud9"></div>' +
            '<div class="cloud cloud10"></div>' +
            '<div class="cloud cloud11"></div>' +
            '<div class="cloud cloud12"></div>' +
            '<div class="cloud cloud13"></div>' +
            '<div class="cloud cloud14"></div>' +
            '<div class="cloud cloud15"></div>' +
            '<div class="cloud cloud16"></div>' +
            '<div class="cloud cloud17"></div>' +
            '<div class="cloud cloud18"></div>' +
            '<div class="cloud cloud19"></div>' +
            '<div class="greeting">Greetings from <span>Japan</span></div>' +
            '</div>').hide().fadeIn(2000)
    }, 4000);

}, function () {
    clearTimeout(timeout)
});