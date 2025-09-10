<!DOCTYPE html>
<html lang="ko">
<?php include('./inc/head.php'); ?>
<!-- ScrollMagic -->
<script crossorigin="anonymous" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" referrerpolicy="no-referrer" src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
<!-- Swiper -->
<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<!-- main.css -->
<link href="./css/main.css" rel="stylesheet"/>
<!-- 반응형 -->
<link href="./css/responsive.css" rel="stylesheet"/>
<!-- main.js -->
<script defer src="./script/main.js"></script>

<body>
  <!-- 헤더  -->
  <?php include('./inc/header.php'); ?>
  <main>
    <!-- VISUAL -->
    <section class="visual">
      <div class="inner">
        <div class="title">
          <img alt="BLOOMING CHOUX - PRING" src="./images/visual_title.png" />
          <a class="btn btn--green" href="javascript:void(0)">자세히 보기</a>
        </div>
        <div class="item_02">
          <img alt="슈크림 라떼" src="./images/visual_cup2.png" />
        </div>
        <div class="item_01">
          <img alt="슈크림 말차라떼" src="./images/visual_cup1.png" />
        </div>
        <div class="item_03">
          <img alt="스타벅스 딸기라떼" src="./images/visual_cup3.png" />
        </div>
      </div>
    </section>
    <!-- NOTICE -->
    <section class="notice">
      <div class="notice_line">
        <div class="bg_left"></div>
        <div class="bg_right"></div>
        <div class="inner">
          <div class="inner_left">
            <h2>공지사항</h2>
            <!-- Swiper -->
            <div class="swiper mySwiper1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0);">공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.공지사항 내용입니다.공지사항 내용입니다.</a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</a>
                </div>
              </div>
            </div>
            <a class="notice_more" href="javascript:void(0);" title="공지사항 더보기">
              <span class="material-symbols-outlined"> add_circle </span>
            </a>
          </div>
          <div class="inner_right">
            <h2>스타벅스 프로모션</h2>
            <a class="notice_more" href="javascript:void(0);" title="프로모션 더보기">
              <span class="material-symbols-outlined"> expand_circle_down </span>
            </a>
          </div>
        </div>
      </div>
      <!-- PROMOTION -->
      <div class="promotion">
        <div class="swiper mySwiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img alt="프로모션 이미지" src="./images/promotion_slide1.jpg" />
              <a class="btn" href="javascript:void(0)">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img alt="프로모션 이미지" src="./images/promotion_slide2.jpg" />
              <a class="btn" href="javascript:void(0)">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img alt="프로모션 이미지" src="./images/promotion_slide3.jpg" />
              <a class="btn" href="javascript:void(0)">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img alt="프로모션 이미지" src="./images/promotion_slide4.jpg" />
              <a class="btn" href="javascript:void(0)">자세히 보기</a>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <!-- REWARDS -->
    <section class="rewards">
      <div class="inner">
        <div class="rewards_logo">
          <img alt="Starbucks Rewards" src="./images/rewards_logo.png" />
        </div>
        <div class="rewards_txt">
          <div class="rewards_top">
            <div>
              <h2> 스타벅스만의 특별한 혜택, 스타벅스 리워드 </h2>
              <p> 스타벅스 회원이세요? 나만의 리워드를 확인해보세요.<br /> 스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요. </p>
            </div>
            <div class="rewards_btn">
              <a class="btn btn--green-fill" href="./signin.php">회원가입</a>
              <a class="btn btn--white" href="./signin.php">로그인</a>
            </div>
          </div>
          <div class="rewards_bottom">
            <div>
              <p> 회원 가입 후, 스타벅스 모바일 카드를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!<br /> 카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다! </p>
            </div>
            <div class="rewards_btn">
              <a class="btn btn--white" href="javascript:void(0)">스타벅스 모바일 카드 선물하기</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SEASON -->
    <section class="season scroll-spy">
      <div class="inner">
        <img alt="스프링 시즌 블렌드 이미지" class="back-to-position to-right" src="./images/season_item.png" />
        <div>
          <img alt="스프링 시즌 블렌드 250g" class="back-to-position to-left" src="./images/season_txt.png" />
          <div class="back-to-position to-left">
            <a class="btn btn--violet" href="javascript:void(0)">자세히 보기</a>
          </div>
        </div>
      </div>
    </section>
    <!-- COSTA -->
    <section class="costa">
      <div class="inner">
        <img alt="COSTA RICA 이미지" src="./images/reserve_costa_coffee.png" />
        <div>
          <img alt="COSTA RICA TICA LINDA" src="./images/reserve_costa_title.png" />
          <a class="btn btn--brown" href="javascript:void(0)">자세히 보기</a>
        </div>
      </div>
    </section>
    <!-- PICK -->
    <section class="pick scroll-spy">
      <div class="inner">
        <div class="pick_txt">
          <img alt="PICK YOUR FAVORITE" class="back-to-position to-right delay-0" src="./images/pick_txt_01.png" />
          <img alt="다양한 메뉴를 스타벅스에서 즐겨보세요." class="back-to-position to-right delay-1" src="./images/pick_txt_02.png" />
          <a class="btn btn--white" href="javascript:void(0)">자세히 보기</a>
        </div>
        <img alt="음료이미지" class="pick_img" src="./images/pick_img.png" />
      </div>
    </section>
    <!-- MAGAZINE -->
    <section class="magazine">
      <div class="inner">
        <img alt="COSTA RICA 이미지" src="./images/magazine_img.png" />
        <div>
          <img alt="COSTA RICA TICA LINDA" src="./images/magazine_txt.png" />
          <a class="btn" href="javascript:void(0)">자세히 보기</a>
        </div>
      </div>
    </section>
    <!-- STORE -->
    <section class="store scroll-spy">
      <div class="inner">
        <img alt="매장 이미지" src="./images/store_img_01.png" />
        <img alt="매장 이미지" src="./images/store_img_02.png" />
        <img alt="커피 배경" src="./images/store_img_03.png" />
        <img alt="매장 배경" src="./images/store_img_04.png" />
        <div>
          <img alt="전국 어디에서나 스타벅스와 함께!" class="back-to-position to-left delay-0" src="./images/store_txt_01.png" />
          <img alt="나의 취향이 머무는 곳, 스타벅스 리저브 매장" class="back-to-position to-left delay-1" src="./images/store_txt_02.png" />
          <div class="back-to-position to-left delay-2">
            <a class="btn" href="javascript:void(0)">매장 찾기</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- FOOTER -->
  <?php include('./inc/footer.php'); ?>
  <div id="top_btn">
    <span class="material-symbols-outlined"> arrow_upward </span>
  </div>
</body>
</html>