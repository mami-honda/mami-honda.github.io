$(function(){
  let height = $(".googleMap").height();
  $(".googleMap iframe").height(height);


    //ハンバーガーメニュートグル

      $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        return false;
      });

      $(".btn-trigger").click(function () {
        $(".header__nav").slideToggle();
      });

      $(".header__nav a").on("click", function () {
         $(".header__nav").slideToggle();
      });

      $('.header__nav a').on('click', function() {
        $('.btn-trigger').removeClass('active');
        return false;
      });


  // 固定ヘッダー時アンカーリンクの位置を調整

      var headerHight = 54;
      $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, 550, "swing");
        return false;
    });


});
