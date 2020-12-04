$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
  $(".btn-trigger").click(function () {
    $(".sp_menu_li").slideToggle('slow');
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
      }, 500);
  });
});
