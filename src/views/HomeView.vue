<template>
  <div class="home">
    <div id="info">
      <div>2023-2</div>
      <div>E-luminous</div>
      <div>이화여자대학교 화공신소재공학전공 학술동아리</div>
      <br>
    </div>
    <img id="ewha-logo" alt="ewha-logo" src = "../assets/ewha.png">

    <hr>

    <div class="input-group">  
      <input type="text" class="form-control" placeholder="Search">
      <div class="input-group-append">
        <b-button class="btn" style="position: relative; z-index: auto;background-color: white;  border-color: lightgray; border-left-color: transparent;"> 
          <b-icon icon="search"/>
        </b-button>
      </div>
    </div>
    <br>
    <div class="title">
      #23-2 프로젝트
    </div>
    <div class="content">
      2023년도 2학기 E-luminous 활동 부원들이<br>
      각자 관심 있는 주제에 대해<br>
      조사한 프로젝트입니다.<br>
      <br>
    </div>

    <div class="title">
      #동아리 소개
    </div>
    <div class="content">
      E-luminous는<br>
      이화여대 화학신소재공학전공 학부생들이<br>
      자신의 진로 탐색과 전공에 대한 심도 높은 이해를 하고자<br>
      2019년도에 만들어진 학술동아리입니다.<br>
      <br>
      Ewha, Engineering의 E와<br>
      luminous의 합성어로,<br>
      “illuminous”의 발음에 맞춰<br>
      ‘총명한’의 의미를 가지고 있습니다.<br>
      <br>
      주로 반도체, 바이오, 배터리, 공정설계, 자유탐색 분야 내<br>
      최신 기술 동향을 파악하고, 논문 및 학술지를 분석합니다.<br>
      또한 자신이 관심 있는 화학신소재공학 분야 관련 주제를 선정하여<br>
      프로젝트를 진행하고 있습니다.<br>
      <br>
      이 외에도 E-luminous 카페 개설,<br>
      MT 및 선배님과의 만남,<br>
      E-luminous 책자 제작 등<br>
      다양한 활동을 진행하고 있습니다.
    </div>
    <br><br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.home {
  padding: 4%;
}


#ewha-logo {
  max-width:  40%;
}


.title {
  font-weight: 700;
}

</style>