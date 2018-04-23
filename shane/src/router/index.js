
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import another from '../components/another'
import alterm from '../components/alterm'
import card from '../components/XhwlJobCard'
import job from '../components/jobcard'



Vue.use(Router)

const routess=[
  {
    path:'',
    component:HelloWorld
  },
  {
    path:'/ano',
    component:another
  },
  {
    path:'/al',
    component:alterm
  }
]

export default new Router({
    mode:'history',
  routes:routess
})


