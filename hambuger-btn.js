$('.buger-btn').click(function(ev){
    ev.preventDefault();

    $(this).toggleClass('active');
    $('.overlay').toggleClass('visible');
});

//스티키메뉴
$(function() {
    var lnb = $("#menu2").offset().top;
   
    $(window).scroll(function() {
    var window = $(this).scrollTop();

    if(lnb < window) {
        $("#menu2").addClass("fixed");
        $("#menu2").addClass("block")
        }else{
            $("#menu2").removeClass("fixed");
            $("#menu2").removeClass("block")
      }
    })
  });

  /*슬라이드 */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 300,
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
    delay: 5000,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
// 슬라이드 이전/다음 버튼 사용 여부
prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
    },
});

/*애니메이션 */
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

/* 날자 태그 */
// INCLUDE JQUERY & JQUERY UI 1.12.1
$( function() {
	$( "#datepicker1" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );

$( function() {
	$( "#datepicker2" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );