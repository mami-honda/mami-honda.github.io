$(function(){
    $(document).ready(function(){

      $("#sp_menu_btn").click(function () {
        $('.sp_menu_li').slideToggle();
      });

    });
  });

$(document).ready(function(){
         $("#categories-link h4 .next1").click(function () {
             $(this).toggleClass("openlink");
              $("#categories-link h4 + .slideToggle1").slideToggle();
              $('.next1').hide();
              $('.down1').show();
         });
        });

$(document).ready(function(){
         $("#categories-link h4 .down1").click(function () {
             $(this).toggleClass("openlink");
              $("#categories-link h4 + .slideToggle1").slideToggle();
              $('.down1').hide();
              $('.next1').show();
         });
        });

$(document).ready(function(){
         $("#categories-link h4 .next2").click(function () {
             $(this).toggleClass("openlink");
              $("#categories-link h4 + .slideToggle2").slideToggle();
              $('.next2').hide();
              $('.down2').show();
         });
        });

$(document).ready(function(){
         $("#categories-link h4 .down2").click(function () {
             $(this).toggleClass("openlink");
              $("#categories-link h4 + .slideToggle2").slideToggle();
              $('.down2').hide();
              $('.next2').show();
         });
        });

$(window).load(function(){
  $(".list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".display_img img").attr("src", img_src);
  });
});
