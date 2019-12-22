import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import app1 from '@/components/app1'
import apple from '@/components/apple'
import banana from '@/components/banana'
import redapple from '@/components/subcom/redapple'

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
      // path: '/apple/:color/detail/:type',
      path: '/apple',
      component: apple,
      children: [{
        path: 'red',
        component: redapple
      }]
    },
    {
      path: '/banana',
      component: banana
    }
  ]
})
