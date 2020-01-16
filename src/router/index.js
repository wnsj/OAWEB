import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import test from '../components/MP/test.vue'
import PaperLess from '../components/MP/PaperLess.vue'
import BaseSetup from '../components/MP/BaseSetup.vue'
import EmployeeManager from '../components/MP/EmployeeManager.vue'
import AskLeaveManage from '../components/MP/PaperLess/AskLeaveManage.vue'
import RestDownManage from '../components/MP/PaperLess/RestDownManage.vue'
import InformationSheet from '../components/MP/PaperLess/InformationSheet.vue'
import EmBase from '../components/MP/EM/EmBase.vue'
import EmFamily from '../components/MP/EM/EmFamily.vue'
import EmEducation from '../components/MP/EM/EmEducation.vue'
import EmShift from '../components/MP/EM/EmShift.vue'
import AttendRule from '../components/MP/BS/AttendRule.vue'
import Department from '../components/MP/BS/Department.vue'
import Position from '../components/MP/BS/Position.vue'
import PositionType from '../components/MP/BS/PositionType.vue'
import ScheduleType from '../components/MP/BS/ScheduleType.vue'
import PowerManager from '../components/MP/BS/PowerManager.vue'
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
				path: '/MP/PaperLess/InformationSheet',
				name: 'InformationSheet',
				component: InformationSheet,
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
				children:[
					{
						path: '/MP/EM/EmBase',
						name: 'EmBase',
						component: EmBase,
					},
					 {
					 	path: '/MP/EM/EmFamily',
					 	name: 'EmFamily',
					 	component: EmFamily,
					 },
					 {
					 	path: '/MP/EM/EmEducation',
					 	name: 'EmEducation',
					 	component: EmEducation,
					 },
					{
						path: '/MP/EM/EmShift',
						name: 'EmShift',
						component: EmShift,
					},
				],
				redirect: '/MP/EM/EmBase'
			},
			{
				path: '/MP/BaseSetup',
				name: 'BaseSetup',
				component: BaseSetup,
				children:[
					{
						path: '/MP/BS/AttendRule',
						name: 'AttendRule',
						component: AttendRule,
					},
					 {
					 	path: '/MP/BS/Department',
					 	name: 'Department',
					 	component: Department,
					 },
					 {
					 	path: '/MP/BS/Position',
					 	name: 'Position',
					 	component: Position,
					 },
					{
						path: '/MP/BS/PositionType',
						name: 'PositionType',
						component: PositionType,
					},
					{
						path: '/MP/BS/ScheduleType',
						name: 'ScheduleType',
						component: ScheduleType,
					},
					{
						path: '/MP/BS/PowerManager',
						name: 'PowerManager',
						component: PowerManager,
					},
				],
				redirect: '/MP/BS/Department'
			}, 
		],
		redirect: '/MP/PaperLess'
	}]
})
