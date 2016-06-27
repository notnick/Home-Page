$(document).ready(function() {

  $(".click-here1").hover(function(){
    $(this).animate({  width: "350px",
      height: "150px"});
}, function() {
    $(this).animate({       width: "250px",
          height: "100px" });
});

$(".click-here2").hover(function(){
  $(this).animate({  width: "350px",
    height: "150px"});
}, function() {
  $(this).animate({       width: "250px",
        height: "100px" });
});




});
