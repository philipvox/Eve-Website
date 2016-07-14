$(document).ready(function() {
    $('.item2').each(function() {
        var d = $(this).attr('src');
        $(this).css('background', 'url(' + d + ')');
    });
});
$('.about').click(function() {
    $('.leftside').children('p').css('color', 'black');
    $('.leftside').children('.info').slideToggle('fast');
    $('.leftside').children('.list').slideUp('fast');
});
$('.menu').click(function() {
    $('.leftside').children('.list').css('color', 'black');
    $('.leftside').children('.list').slideToggle('fast');
    $('.leftside').children('.info').slideUp('fast');
});
$('img').click(function() {
    var cliked = $('img').attr('data');
    $('img').attr('data', 'clicked');
    $(this).css({
        position: 'fixed',
        left: '50%',
        top: '50%',
        'max-width': '1300px',
        'z-index': '22',
        transform: 'translate(-50%,-52%)',
    });
    $('.backdrop').show();
    if (cliked === 'clicked') {
        $('img').attr('data', '');
        $('img').attr('style', '');
        $('.backdrop').hide();
    }
    else {}
});
$('.backdrop').click(function() {
    $('img').attr('data', '');
    $('img').attr('style', '');
    $('.backdrop').hide();
});
$('.item').mouseover(function() {
    var t = $(this).attr('data');
    $('.title').children('h1').text(t);
});
$('.item').mouseleave(function() {
    $('.title').children('h1').text('');
});
$(window).scroll(function() {
    var $div = $('.item');
    if ($div.is(':in-viewport')) {
        var t = $('.item:in-viewport').attr('data');
        $('.title').children('h1').text(t);
        console.log(t);
    }
});
$('.rightside').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.item',
  percentPosition: true,
  // masonry: {
  //   // use element for option
  //   columnWidth: '.grid-sizer'
  // }
});