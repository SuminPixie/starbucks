$(document).ready(function() {
  // 검색 버튼 클릭 시 검색창 포커스
  $('.search').click(function() {
    $(this).find('input').focus();
  });
  // 메뉴에 호버 시 서브메뉴 나오게
  $('.gnb .gnb__name').hover(function() {
    $(this).next('.sub').stop().slideDown();
  }, function() {
    $(this).next('.sub').stop().slideUp(100);
  });
  // 서브메뉴에 마우스가 올라가 있으면 유지
  $('.gnb .sub').mouseenter(function() {
    $(this).stop().slideDown();
  });
  $('.gnb .sub').mouseleave(function() {
    $(this).stop().slideUp();
  });

  //프로모션 더보기
  $('.promotion').hide();
  $('.notice_more[title="프로모션 더보기"]').click(function(){
    $('.promotion').slideToggle();
  })

  // -----------태블릿&모바일 메뉴 토글-----------
  // 초기 상태: 서브메뉴 숨김
  $('.tablet_menu .gnb__name, .tablet_menu .sub__name').siblings().hide();

  // 공통 클릭 이벤트 처리
  $('.tablet_menu .gnb__name, .tablet_menu .sub__name').click(function () {
    const $this = $(this);
    const isGnb = $this.hasClass('gnb__name');
  
    // 아이콘
    const $icon = $this.find('.material-symbols-outlined');
  
    if (isGnb) {
      // depth1: 다른 메뉴 닫기
      $this.parent().siblings().find('.sub').stop().slideUp();
      $('.sub li:not(:first-child)').stop().slideUp();
  
      // 다른 아이콘 초기화
      $this.parent().siblings().find('.material-symbols-outlined').text('keyboard_arrow_down');
    } else {
      // depth2: 다른 depth2 항목 닫기
      $this.parent().siblings().find('li:not(:first-child)').stop().slideUp();
  
      // 다른 아이콘 초기화
      $this.parent().siblings().find('.material-symbols-outlined').text('keyboard_arrow_down');
    }
  
    // 현재 메뉴 toggle
    $this.siblings().stop().slideToggle();
  
    // 아이콘 토글
    $icon.text($icon.text() === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down');
  });
  
  // 토글메뉴 depth1 아이콘 추가
  $('.gnb_tablet .gnb__name').each(function () {
    const hasSubMenu = $(this).closest('li').find('.sub li').length > 1;
    if (hasSubMenu && $(this).find('span.material-symbols-outlined').length === 0) {
      $(this).append('<span class="material-symbols-outlined">keyboard_arrow_down</span>');
    }
  });
  // 토글메뉴 depth2 아이콘 추가
  $('.gnb_tablet li.sub__name').each(function () {
    const $nextLis = $(this).siblings('li');
    if ($nextLis.length > 0 && $(this).find('span.material-symbols-outlined').length === 0) {
      $(this).children().append('<span class="material-symbols-outlined">keyboard_arrow_down</span>');
    }
  });
  // 열기
  $('#util_bar').click(() => {
    $('.gnb_tablet, .overlay').addClass('show');
    $('#gnb_close').show();
    $('body').addClass('no-scroll'); // 스크롤 막기
  });
  // 닫기
  $('#gnb_close, .overlay').click(() => {
    $('.gnb_tablet, .overlay').removeClass('show');
    $('#gnb_close').hide();
    $('body').removeClass('no-scroll'); // 스크롤 다시 허용
  });


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

  // ---------FOOTER------------







})






// 스크롤할때 배지랑 탑버튼 숨겨지고 보이게
const badge = document.querySelector('header .badge');
const toTopEl = document.querySelector('#top_btn');

window.addEventListener('scroll', _.throttle(function() {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badge, .6, {
      opacity: 0,
      display: 'none'
    });
    // 탑버튼 보이기
    gsap.to(toTopEl, .2, {
      opacity: 1,
      display: 'block'
    });
  } else {
    // 배지 보이기
    gsap.to(badge, .6, {
      opacity: 1,
      display: 'block'
    });
    // 탑버튼 숨기기
    gsap.to(toTopEl, .2, {
      opacity: 0,
      display: 'none'
    });
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})



// 새로고침 시 visual 이미지 하나씩 보여지게
const fadeEls = document.querySelectorAll('.visual .inner > div');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 순서로 보여짐
    opacity: 1
  });
});

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
  // 손가락 넘김 허용
  allowTouchMove: true,

  // 데스크탑에서는 마우스 드래그 방지
  breakpoints: {
    769: { // 769px 이상부터 적용
      allowTouchMove: false,
      centeredSlides: true, // 현재 슬라이드를 중앙에 배치
      loopAdditionalSlides: 1 // 다음 슬라이드 미리 생성
    }
  }
});

// 스크롤 매직(화면에 요소가 보이면 애니메이션되게)
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

// 자동으로 년 계산해서 카피라이트에 삽입
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


window.addEventListener('load', () => {
  const ul = document.querySelector('.f_award ul');

  // 모바일에서만 작동 (768px 이하)
  if (window.innerWidth <= 768 && !ul.classList.contains('cloned')) {
    ul.innerHTML += ul.innerHTML; // 내용 복제
    ul.classList.add('cloned', 'auto-slide');
  }
});




