<template>
  <div class="home">

    <div id="title">
      <div id="title_name">전체 프로젝트</div>
    </div>
    <br><br><br>
    <div class="input-group">  
      <input type="text" class="form-control" placeholder="Search">
      <div class="input-group-append">
        <b-button class="btn" style="position: relative; z-index: auto;background-color: white;  border-color: lightgray; border-left-color: transparent;"> 
          <b-icon icon="search"/>
        </b-button>
      </div>
    </div>
    <br>
    <div id="keyword">
      <button id="button" @click="goToBatteryPage">#배터리</button>
      <button id='button' @click="goToSemiconductorPage">#반도체</button>
      <button id='button' @click="goToBioPage">#바이오</button>
      <button id='button' @click="goToProcessDesignPage">#공정설계</button>
      <button id='button' @click="goToMaterialsEnergyPage">#신소재/에너지</button>
    </div>
    <br>
    <hr>
    <div class="content">
      2023년도 2학기 E-luminous 활동 부원들이<br>
      각자 관심 있는 주제에 대해<br>
      조사한 프로젝트입니다.<br>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AllProjectView',
  components: {
  },
  methods: {
    goToBatteryPage() {
      this.$router.push('/battery');
    },
    goToSemiconductorPage() {
      this.$router.push('/semiconductor');
    },
    goToBioPage() {
      this.$router.push('/bio');
    },
    goToProcessDesignPage() {
      this.$router.push('/processDesign');
    },
    goToMaterialsEnergyPage() {
      this.$router.push('/materialsEnergy');
    }
  }
}
</script>

<style>
.home {
  padding: 4%;
  align-items: center;
}

#title {
  background-color: green;
  max-width: 70%;
  margin: 0 auto;
}

#title_name {
  line-height : 60px;

  color: white;
  font-size: 24pt;
}

#button {
  background-color: white;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14pt;
}

</style>