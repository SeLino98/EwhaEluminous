<template>
  <div class="home">
    <div class="logo">
      <Transition name="bounce" appear>
          <img id="ewha-logo" alt="ewha-logo" src = "../assets/ewha.png">
        <hr>
    </Transition>
  </div>

      <Transition name="bounceinfo" appear>
      <div id="info" style="text-align: left; margin-top: 30%;">
        <div style="font-weight: 700; font-size: 48px; opacity: 0.5;">2023-2</div>
        <div style="font-weight: 700; font-size: 48px">E-luminous</div>
        <!-- <div>이화여자대학교 화공신소재공학전공 학술동아리</div> -->
      </div>
    </Transition>

    <br>
    <br>

    <div class="input-group">  
      <input type="text" class="form-control" placeholder="Search" v-model="searchText" @keyup.enter="goToSearchResultView()">
      <div class="input-group-append">
        <b-button class="btn" @click="goToSearchResultView()" style="position: relative; z-index: auto;background-color: white;  border-color: lightgray; border-left-color: transparent;"> 
          <b-icon icon="search"/>
        </b-button>
      </div>
    </div>
    <br>
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
  data() {
    return{
      searchText : ""
    }
  },
  methods: {
        goToSearchResultView() {
      // '/thesis/:contentId' 경로로 이동하면서 contentId를 동적 라우팅 파라미터로 전달
      this.$router.push({ name: 'searchResult', params: { searchText: this.searchText } });
    },
    
  }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 2s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0);
    opacity: 0.3;
  }
}


.bounceinfo-enter-active {
  animation: bounceinfo-in 2s;
}
@keyframes bounceinfo-in {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.home {
  padding: 4%;
  overflow: hidden;
}

.logo {
  position: relative; 
}

#ewha-logo {
  max-width: 80%;
  position: absolute; 
  opacity: 0.3;
  left: 40%;
  object-fit: cover;
}


.title {
  font-weight: 700;
}

</style>