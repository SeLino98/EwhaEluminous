<template>
    <div class="header">
        <b-progress id="prg" :value="value" :max="max" variant="ewha"></b-progress>
        <div id="button_menu">
    <b-icon class="h1 mb-2" icon="list"  v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-icon>
    </div>
    <b-sidebar
      id="sidebar-backdrop"
      title=""
      backdrop
      shadow
      bg-variant="ewha"
    >
    <template #default="{hide}">
      <div class="px-3 py-2" id="sidebarinfo">
        <div>2023-2</div>
        <div>E-luminous</div>
        <hr style="background-color: white">
        <b-nav vertical style="display:flex">
          <b-nav-item href="#link-1" @click="hide" class="m-auto">#메인 페이지</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#전체 프로젝트</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#배터리</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#반도체</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#바이오</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#공장설계</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#신소재/에너지</b-nav-item>
          <b-nav-item href="#link-2" @click="hide" class="m-auto">#만든이들</b-nav-item>
        </b-nav>
      
      </div>
    </template>
    </b-sidebar>
    </div>
</template>

<script>
export default {
    name: 'NavHeader',
    data(){
    return {
      value: 0,
    }
  },
  methods: {
    updateProgressIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.value = (windowScroll / height) * 100 + "%";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressIndicator);
  }
}
</script>

<style lang="scss">
@import "../../styles/custom.scss";

#prg{
  position: sticky;
  top: 0px;
  height: 3px;
}

nav {
padding: 30px;
}

nav a {
font-weight: bold;
color: #2c3e50;
}

#button_menu {
  text-align: left;
}

#sidebarinfo{
  color: white;
}

.nav-link {
  color: white;
  width: fit-content;
}
</style>