
$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 50){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

    $(document).on('scroll', function(){
        if($(window).scrollTop() > 50){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })


});

//2.슬라이드
$(function() {
    $(".visual .slide").slick({ 
        arrows: false, //화살표 사용안함
        draggable : true,
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });

    $('.center').slick({
        slide: 'li',
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 650,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }}]
        });
}); 


$(function(){
    $(".menuOpen").on('click',function(){
        $(".menu").addClass("on");
    });
    $(".close").on('click',function(){
        $(".menu").removeClass("on");
    });
});

//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 


   // 1. 특정 위치에서 부터 버튼 나타나고, 사라지게..효과는 fade로

   $(function(){

    // 1. 특정 위치에서 부터 버튼 나타나고, 사라지게..효과는 fade로
   $(window).scroll(function () {
         if ($(this).scrollTop() > 1200) {
             $('.goTop').fadeIn(500);
         } else {
             $('.goTop').fadeOut(500);
         }
     });
 
 $(".goTop").click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
 });
 });





