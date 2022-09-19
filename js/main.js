$(document).ready(function(){
    $('.allBtn').click(function(){
        $('nav').animate({left: 0},400,'swing');
        $('.dark').css({'display':'block'});

    });

    $('nav .close_btn').click(function(){
        $('.dark').css({'display':'none'});
        $('nav').animate({left: -300},200);
    });

    $(window).resize(function(){
        $('nav').removeAttr('style');
    });
});