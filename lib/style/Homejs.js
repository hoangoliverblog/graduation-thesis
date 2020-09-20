
$(document).ready(function(){

    $('.hiden_icon').on('click',function(){
        $(".wapper").animate({
            height: 'toggle'
          });
    })

    $('.root_home').mouseenter(function(){
        $('.menu_dropdown').css("display","block").css("transtion","2s");
    })

    $('.root_home').mouseleave(function(){
        $('.menu_dropdown').css("display","none");
    })

})