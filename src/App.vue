<template>
  <div id="app">
    <nav-header></nav-header>  
    <router-view/>
    <footer-view></footer-view>

  </div>
</template>


<script>
import NavHeader from './components/Common/NavHeader.vue';
import FooterView from './components/Common/Footer.vue';

export default {
  name: 'App',
  components: {
    NavHeader,
    FooterView
  },
}
</script>



<style lang="scss">
@import "./styles/custom.scss";


#app {
  font-family: 'Noto Sans KR',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.header{
  position: sticky;
  top: 0px;
  z-index: 1;
}

router-view {
  z-index: 2;
}

.b-icon{
  color: #00462A;
}


</style>

