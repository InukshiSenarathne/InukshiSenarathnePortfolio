// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function() {
    $(".testmonial_active").owlCarousel({
        items: 1, // Show one testimonial at a time
        loop: true, // Enable infinite looping
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // 5-second delay between slides
        smartSpeed: 1000, // Transition speed
        dots: true, // Show dots for navigation
        nav: false, // Hide next/prev buttons
        responsive: {
            0: {
                items: 1 // Adjust for smaller screens
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});

// Place any jQuery/helper plugins in here.
