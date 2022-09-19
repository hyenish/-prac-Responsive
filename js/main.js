$(document).ready(function(){
    $('.allBtn').click(function(){
        $('nav').animate({left: 0},400,'swing');
    });

    $('nav .close_btn').click(function(){
        $('nav').animate({left: -300},200);
    });

    $(window).resize(function(){
        $('nav').removeAttr('style');
    });
});