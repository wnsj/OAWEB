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
							<router-link to="/MP/PaperLess/AskLeaveManage"><i class="fa" aria-hidden="true">　基本信息管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/PaperLess/RestDownManage"><i class="fa" aria-hidden="true">　学历信息管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/PaperLess/RestDownManage"><i class="fa" aria-hidden="true">　家庭信息管理</i></router-link>
						</li>
						<li>
							<router-link to="/MP/PaperLess/RestDownManage"><i class="fa" aria-hidden="true">　岗位调动管理</i></router-link>
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
