<template>
	<div class="root">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 aside-logo">
			<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<h2 class="pull-left">
					<strong style="font-size: 40px;">佶安OA办公系统</strong>
					<font> </font>
				</h2>
			</div>
			<!-- <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right">
				<p style="color: #1b4fa3;">欢迎<span style="color: #d58512;"> {{accountName}} </span></p>
				<button class="btn btn-default m_r_10" v-on:click="loginOut()">退出</button>
			</div> -->
		</div>
		<div class="row">
			<ul class="nav nav-tabs" id="aside-menu">
				<li class="li-active">
					<router-link to="/MP/EmployeeManager"><i class="fa" aria-hidden="false">员工管理</i></router-link>
				</li>
				<li>
					<router-link to="#"><i class="fa" aria-hidden="false">考勤管理</i></router-link>
				</li>
				<li>
					<router-link to="#"><i class="fa" aria-hidden="false">招聘管理</i></router-link>
				</li>
				<li>
					<router-link to="/MP/PaperLess"><i class="fa" aria-hidden="false">无纸化</i></router-link>
				</li>
				<li>
					<router-link to="/MP/PaperLess/AskLeaveManage"><i class="fa" aria-hidden="false">请假管理</i></router-link>
				</li>
				<li>
					<router-link to="/MP/PaperLess/RestDownManage"><i class="fa" aria-hidden="false">倒休管理</i></router-link>
				</li>

                <li>
                	<router-link to="/MP/PaperLess/forgetCardManage"><i class="fa" aria-hidden="false">漏打卡管理</i></router-link>
                </li>
                   <li>
                	<router-link to="/MP/PaperLess/reimbursementAccount"><i class="fa" aria-hidden="false">报销单管理</i></router-link>
                </li>
                <li>
					<router-link to="/MP/PaperLess/InformationSheet"><i class="fa" aria-hidden="false">信息单管理</i></router-link>
				</li>
			</ul>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 embed-responsive embed-responsive-16by9" style="overflow: inherit; background-color:">
			<router-view />
		</div>
	</div>
</template>

<script>

</script>

<style>

</style>
