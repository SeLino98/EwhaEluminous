import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllProject from '../views/AllProjectView.vue'
import BatteryView from '../views/BatteryView.vue'
import SemiconductorView from '../views/SemiconductorView.vue'
import BioView from '../views/BioView.vue'
import ProcessDesignView from '../views/ProcessDesignView.vue'
import MaterialsEnergyView from '../views/MaterialsEnergyView.vue'
import EditProjectView from '../views/EditProjectView.vue'
import ThesisView from '../views/ThesisView.vue'
import SearchResultView from '../views/SearchResultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/editProject',
    name: 'editProject',
    component: EditProjectView
  },
  {
    path: '/allProject',
    name: 'allProject',
    component: AllProject
  },
  {
    path: '/battery',
    name: 'Battery',
    component: BatteryView
  },
  {
    path: '/semiconductor',
    name: 'semiconductor',
    component: SemiconductorView
  },
  {
    path: '/bio',
    name: 'bio',
    component: BioView
  },
  {
    path: '/processDesign',
    name: 'processDesign',
    component: ProcessDesignView
  },
  {
    path: '/materialsEnergy',
    name: 'materialsEnergy',
    component: MaterialsEnergyView
  },
  {
    path: '/thesis/:contentId',
    name: 'thesis',
    props: true,
    component: ThesisView
  },
  {
    path: '/searchResult/:searchText',
    name: 'searchResult',
    props: "",
    component: SearchResultView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
})

export default router
