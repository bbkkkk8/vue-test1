import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import app1 from '@/components/app1'
import apple from '@/components/apple'
import banana from '@/components/banana'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/app1',
    //   name: 'app1',
    //   component: app1
    // }
    {
      path: '/apple',
      component: apple
    },
    {
      path: '/banana',
      component: banana
    }
  ]
})
