//トリガーメニュー//
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
  $(".btn-trigger").click(function () {
        $(".sp_menu_li").slideToggle();
      });
