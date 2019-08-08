$(document).ready(function() {
    $("#im1").hover(function() {
      $("#im1").css({"transform": "scale(1.04)", "filter": "brightness(1.5)"});
    },
    function(){
        $("#im1").css({"transform": "scale(1.0)", "filter": "brightness(1.0)"});
    });
    $("#im2").hover(function() {
        $("#im2").css({"transform": "scale(1.04)", "filter": "brightness(1.5)"});
      },
      function(){
          $("#im2").css({"transform": "scale(1.0)", "filter": "brightness(1.0)"});
      });
      $("#im3").hover(function() {
        $("#im3").css({"transform": "scale(1.04)", "filter": "brightness(1.5)"});
      },
      function(){
          $("#im3").css({"transform": "scale(1.0)", "filter": "brightness(1.0)"});
      });
      $("#im4").hover(function() {
        $("#im4").css({"transform": "scale(1.04)", "filter": "brightness(1.5)"});
      },
      function(){
          $("#im4").css({"transform": "scale(1.0)", "filter": "brightness(1.0)"});
      });
    $("#im1").click(function(){
     $("#hide1").fadeToggle(500);
    });
    $("#im2").click(function(){
        $("#hide2").fadeToggle(500);
       });
       $("#im3").click(function(){
        $("#hide3").fadeToggle(500);
       });
       $("#im4").click(function(){
        $("#hide4").fadeToggle(500);
       });
  });