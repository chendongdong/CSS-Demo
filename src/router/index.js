import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CSSDemo1 from '@/components/CSSDemo1'
import CSSDemo2 from '@/components/CSSDemo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/css-demo1',
      name: 'CSSDemo1',
      component: CSSDemo1
    },
    {
      path: '/css-demo2',
      name: 'CSSDemo2',
      component: CSSDemo2
    }
  ]
})
