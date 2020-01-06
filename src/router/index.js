import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import test from '../components/MP/test.vue'
import AskLeaveManage from '../components/MP/AskLeaveManage.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage,
    children: [{
      path: '/MP/test',
      name: 'test',
      component: test,
    }, {
      path: '/MP/AskLeaveManage',
      name: 'AskLeaveManage',
      component: AskLeaveManage,
    }],
    // redirect: '/MainPage'
  }]
})