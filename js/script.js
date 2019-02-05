jQuery(document).ready(function($) {
// get the value of the bottom of the header element by adding the offset (distance relative to window/distance of element from top of window) of that element plus its height, set it as a variable
var headerbottom = $('#header').offset().top + $('#header').height() - $('.primary-navbar').height();

// on scroll,
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > headerbottom) {
        $('.primary-navbar').addClass('fixed-top');
    } else {
        $('.primary-navbar').removeClass('fixed-top');
    }

  });
});
