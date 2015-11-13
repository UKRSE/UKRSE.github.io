$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    $('html,body').animate({scrollTop: target.offset().top}, 500);
  });
});


