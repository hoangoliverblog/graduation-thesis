
$(document).ready(function(){
    // navbar
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
// slide
$('.owl-carousel').owlCarousel({
    stagePadding: 0,
    dots:false,
    autoplay:true,
    autoplayTimeout:7000,
    loop:true,
    margin:6,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})