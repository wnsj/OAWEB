<template>
	<div class="wraper">
		<div class="col-md-12 col-lg-12 main-title">
			<h1 class="titleCss">权限管理</h1>
		</div>
		<div class="">
			<div class="col-md-12 col-lg-12" v-for=" (item1,index) in powerList" index="index">
				{{item1.powerName}}
				<ul v-show="item1.operate.length>0">
					<li></li>
				</ul>
				<div  class="col-md-12 col-lg-12" v-for=" (item2,index) in item1.childrens" index="index">
					{{item2.powerName}}
					<ul v-show="item2.operate.length>0">
						<li v-for=" (item2_1,index) in item2.operate">{{item2_1.operateName}}</li>
					</ul>
				</div>
			</div>
			<div class="col-md-12 col-lg-12 posAb">
				<p class="tips">* 双击单行，可对当前数据进行修改</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				powerList:[
					{
						moduleId:'1',
						powerName:'基础设置',
						level:'1',
						isSelect:false,
						operate:[],
						childrens:[
							{
								moduleId:'3',
								powerName:'部门管理',
								level:'2',
								isSelect:false,
								operate:[
									{
										operateId:'1',
										operateName:'部门查询',
										isSelect:false,
									}
								],
							},
							{
								moduleId:'4',
								powerName:'岗位管理',
								level:'2',
								isSelect:false,
								operate:[
									{
										operateId:'1',
										operateName:'岗位查询',
										isSelect:false,
									},
									{
										operateId:'1',
										operateName:'岗位修改',
										isSelect:false,
									}
								],
							},
						]
					},
					{
						moduleId:'2',
						powerName:'员工管理',
						level:'1',
						isSelect:false,
						operate:[],
						childrens:[
							{
								moduleId:'2',
								powerName:'员工信息管理',
								level:'2',
								isSelect:false,
								operate:[
									{
										operateId:'1',
										operateName:'员工添加',
										isSelect:false,
									},
									{
										operateId:'1',
										operateName:'员工修改',
										isSelect:false,
									}
								],
							},
							{
								moduleId:'2',
								powerName:'学历信息管理',
								level:'2',
								isSelect:false,
								operate:[
									{
										operateId:'1',
										operateName:'学历查询',
										isSelect:false,
									},
									{
										operateId:'1',
										operateName:'学历添加',
										isSelect:false,
									}
								],
							},
						]
					},
				],
			};
		},
		methods:{
			initData(){
				
			},
			
			
		},
		mounted() {
			
		},
		created() {
		}
		
	}
</script>

<style>

</style>