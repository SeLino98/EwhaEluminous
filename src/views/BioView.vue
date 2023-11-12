<template>
  <div class="home">

    <div id="title">
      <div id="title_name">바이오</div>
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
      바이오 페이지입니다.<br>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BioView',
  components: {
  },
  methods: {
    goToBatteryPage() {
      if (this.$route.path !== '/battery') {
        this.$router.push('/battery');
      }
    },
    goToSemiconductorPage() {
      if (this.$route.path !== '/semiconductor') {
        this.$router.push('/semiconductor');
      }
    },
    goToBioPage() {
      if (this.$route.path !== '/bio') {
        this.$router.push('/bio');
      }
    },
    goToProcessDesignPage() {
      if (this.$route.path !== '/processDesign') {
        this.$router.push('/processDesign');
      }
    },
    goToMaterialsEnergyPage() {
      if (this.$route.path !== '/materialsEnergy') {
        this.$router.push('/materialsEnergy');
      }
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