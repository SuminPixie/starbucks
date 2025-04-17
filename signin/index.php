<?php include $_SERVER['DOCUMENT_ROOT'] . '/project/starbucks/inc/config.php'; ?>

<!DOCTYPE html>
<html lang="ko">
<?php include ROOT . '/inc/head.php'; ?>
<!-- signin.css -->
<link rel="stylesheet" href="/project/starbucks/css/signin.css">
<!-- 반응형 -->
<link href="/project/starbucks/css/responsive.css" rel="stylesheet"/>

<body>
  <!-- 헤더 -->
  <?php include ROOT . '/inc/header.php'; ?>
  <main>
    <section class="signin">
      <div>
        <h1>로그인</h1>
        <div class="signin_box">
          <h2><span style="color: #006633;">Welcome!</span> 스타벅스에 오신 것을 환영합니다.</h2>
          <form action="#" method="post">
            <!-- 아이디 비밀번호 -->
            <label for="signin_id" class="hide">아이디</label>
            <input type="text" id="signin_id" name="signin_id" placeholder="아이디를 입력하세요." required />
            <label for="signin_pw" class="hide">비밀번호</label>
            <input type="password" id="signin_pw" name="signin_pw" placeholder="비밀번호를 입력하세요." required />
            <!-- 아이디 저장 -->
            <span class="id_save">
              <input type="checkbox" id="id_save" name="id_save">
              <label for="id_save">아이디 저장</label>
            </span>
            <!-- 로그인 -->
            <input type="submit" id="signin_submit" value="로그인" />
            <p class="notice">
              * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.<br>
              * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
            </p>
          </form>
          <!-- 회원가입 버튼 목록 -->
          <div class="join_btn">
            <ul>
              <li><a href="javascript:void(0);">회원가입</a></li>
              <li><a href="javascript:void(0);">아이디 찾기</a></li>
              <li><a href="javascript:void(0);">비밀번호 찾기</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- FOOTER -->
  <?php include ROOT . '/inc/footer.php'; ?>
  <div id="top_btn">
    <span class="material-symbols-outlined"> arrow_upward </span>
  </div>
</body>
</html>