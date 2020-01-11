<template>
	<div>
		<div class="container-fluid clear-mp">
			<div class="row clear-mp">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 my-aside clear-mp" id="Adiv" style="padding-top: 10px;">
					<ul id="aside-menu">
						<li>
							<p style=" font-size: 30px; padding-left: 15px;" aria-hidden="true">所有内容</p>
						</li>
						<li>
							<router-link to="/MP/BS/Department"><i class="fa" aria-hidden="true">　部门管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/BS/Position"><i class="fa" aria-hidden="true">　岗位管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/BS/PositionType"><i class="fa" aria-hidden="true">　岗位类型管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/BS/AttendRule"><i class="fa" aria-hidden="true">　出勤规则管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/BS/ScheduleType"><i class="fa" aria-hidden="true">　排班类型管理</i></router-link>
						</li>
					</ul>
				</div>
				<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 embed-responsive embed-responsive-16by9" style="overflow: inherit; background-color:">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
