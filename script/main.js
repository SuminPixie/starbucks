$(document).ready(function() {
  // ------------모바일 버전 이미지로 교체--------------
  function mobileImages() {
    const isMobile = window.innerWidth <= 960;
  
    // 이미지 교체 대상
    const targets = $(
      '.visual .item_01 img, ' +
      '.visual .item_02 img, ' +
      '.visual .item_03 img, ' +
      '.season img,' +
      '.pick .pick_txt img'
    );
  
    targets.each(function () {
      const src = $(this).attr('src').replace('_mo', '');
      const ext = src.slice(src.lastIndexOf('.'));
      const name = src.slice(0, -ext.length);
      $(this).attr('src', isMobile ? `${name}_mo${ext}` : `${name}${ext}`);
    });
  }
  mobileImages();
  $(window).resize(mobileImages);

  // -------------PROMOTION 더보기 버튼--------------
  $('.promotion').hide();
  $('.notice_more[title="프로모션 더보기"]').click(function(){
    $('.promotion').slideToggle();
  })








})



// ------------새로고침 시 visual 이미지 하나씩 보여지게-----------
const fadeEls = document.querySelectorAll('.visual .inner > div');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 순서로 보여짐
    opacity: 1
  });
});

// -------------스와이퍼---------------
// 공지사항 스와이퍼
const swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
});

// 프로모션 스와이퍼
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000
  },
  allowTouchMove: true,
  breakpoints: {
    769: { // 769px 이상부터 적용
      allowTouchMove: false,
      centeredSlides: true, // 현재 슬라이드를 중앙에 배치
      loopAdditionalSlides: 1 // 다음 슬라이드 미리 생성
    }
  }
});

// -------------스크롤 매직-----------------
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});





