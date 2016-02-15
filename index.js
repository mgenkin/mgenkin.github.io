$(document).ready(function(){
  $(".nav-item").on("mouseover",function(){
    $( this ).addClass( "nav-hover");
  })
    .on("mouseout",function(){
    $( this ).removeClass( "nav-hover");
  })
    .on("click", function(){
      $( this ).css({"background": "#445566"});
      location.reload()
    });
  drawDots();
  $(window).resize(drawDots);
});
function drawDots(){
  $("#square").empty();
  var W = $("#square").width();
  var H = $("#square").height();
  var i = 0;
  var j = 0;
  var wfrac = 70;
  var hfrac = 50;
  for(var i = 0; i < W; i += H/hfrac){
    for(var j = 0; j < H; j += W/wfrac){
      var $circContainer = $("<div></div>")
        .addClass('circleContainer')
        .css({left: i, top: j, width:W/wfrac, height: H/hfrac})
        .appendTo("#square");
      var $circ = $("<div></div>")
        .addClass('circle')
        .appendTo($circContainer);
    };
  };
  $(".circleContainer").on("mouseover", function(){
    $(this).children().stop(true, true).toggleClass("circle-hover");
  });
  $(".circleContainer").on("mouseout", function(){
    $(this).children().stop(true, true).toggleClass("circle-hover");
  });
};