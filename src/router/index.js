import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import test from '../components/MP/test.vue'
import PaperLess from '../components/MP/PaperLess.vue'
import EmployeeManager from '../components/MP/EmployeeManager.vue'
import AskLeaveManage from '../components/MP/PaperLess/AskLeaveManage.vue'
import RestDownManage from '../components/MP/PaperLess/RestDownManage.vue'
import forgetCardManage from '../components/MP/PaperLess/forgetCardManage.vue'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'MainPage',
		component: MainPage,
		children: [
			{
				path: '/MP/test',
				name: 'test',
				component: test,
			},
			{
				path: '/MP/PaperLess/AskLeaveManage',
				name: 'AskLeaveManage',
				component: AskLeaveManage,
			},
			{
				path: '/MP/PaperLess/RestDownManage',
				name: 'RestDownManage',
				component: RestDownManage,
			},
            {
            	path: '/MP/PaperLess/forgetCardManage',
            	name: 'forgetCardManage',
            	component: forgetCardManage,
            },
			{
				path: '/MP/PaperLess',
				name: 'PaperLess',
				component: PaperLess,
				children:[
					// {
					// 	path: '/MP/PaperLess/AskLeaveManage',
					// 	name: 'AskLeaveManage',
					// 	component: AskLeaveManage,
					// },
					// {
					// 	path: '/MP/PaperLess/RestDownManage',
					// 	name: 'RestDownManage',
					// 	component: RestDownManage,
					// },
				],
				redirect: '/MP/PaperLess/AskLeaveManage'
			},
			{
				path: '/MP/EmployeeManager',
				name: 'EmployeeManager',
				component: EmployeeManager,
			},
		],
		redirect: '/MP/PaperLess'
	}]
})
