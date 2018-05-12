import Vue from 'vue'
import Router from 'vue-router'

const lazyLoading = (name) => () => import('@/components/' + name)

Vue.use(Router)

const menus = [
  {
    path: '/css-demo1',
    name: 'CSSDemo1',
    component: lazyLoading('CSSDemo1')
  },
  {
    path: '/css-demo2',
    name: 'CSSDemo2',
    component: lazyLoading('CSSDemo2')
  },
  {
    path: '/css-demo3',
    name: 'CSSDemo3',
    component: lazyLoading('CSSDemo3')
  },
  {
    path: '/css-demo4',
    name: 'CSSDemo4',
    component: lazyLoading('CSSDemo4')
  },
  {
    path: '/list-demo',
    name: 'ListDemo',
    component: lazyLoading('ListDemo')
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: lazyLoading('HelloWorld')
    },
    {
      path: '*',
      redirect: '/'
    },
    ...generateRoute(menus)
  ]
})

function generateRoute (menu = [], routes = []) {
  menu.forEach(item => {
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoute(item.children, routes)
    }
  })
  return routes
}
