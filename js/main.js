$(".buyRightnow").on('click',function(){
  $(".seatPop").show();
});

$(".showOne button").on('click',function(){
    $(".seatSlect").show();
    $(".flex_container").hide();
});

$(".redseatDetail").on('click',function(){
    $(".seatSlect").hide();
    $(".finish").show();
});

