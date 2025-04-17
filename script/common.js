$(document).ready(function() {
  // ----------GNB 슬라이드 및 검색창-----------
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

  // -----------태블릿&모바일 메뉴 토글-----------
  // 처음에는 모든 슬라이드를 접는다.
  $('.tablet_menu .gnb__name, .tablet_menu .sub__name').siblings().hide();
  // 메뉴 클릭 시 
  $('.tablet_menu .gnb__name, .tablet_menu .sub__name').click(function () {
    const $this = $(this);
    const isGnb = $this.hasClass('gnb__name');
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





})


// ----------스크롤할때 배지&탑버튼 숨겨지고 보이게-----------
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


// ---------FOOTER 연도 계산해서 카피라이트에 삽입---------------
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// -----------FOOTER 어워즈 자동 슬라이드-------------
window.addEventListener('load', () => {
  const ul = document.querySelector('.f_award ul');
  if (window.innerWidth <= 768 && !ul.classList.contains('cloned')) {
    ul.innerHTML += ul.innerHTML; // 내용 복제
    ul.classList.add('cloned', 'auto-slide');
  }
});