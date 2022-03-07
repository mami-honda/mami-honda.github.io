$(function(){
    $(document).ready(function(){

      $("#sp_menu_btn").click(function () {
        $(".sp_menu_li").slideToggle();
      });

    });
  });
  
  $(function(){
    $(document).ready(function(){

      $("#sp_menu_btn2").click(function () {
        $(".sp_menu_li").slideToggle();
      });

    });
  });
  
  $(document).ready(function(){
         $("#sp_menu_btn").click(function () {
              $("#sp_menu_btn").hide();
              $("#sp_menu_btn2").show();
         });
        });
 
  $(document).ready(function(){
         $("#sp_menu_btn2").click(function () {
              $("#sp_menu_btn2").hide();
              $("#sp_menu_btn").show();
         });
        });
 