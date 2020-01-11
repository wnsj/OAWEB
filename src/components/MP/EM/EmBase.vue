<template>
	<div class="wraper">
		<div class="col-md-12 col-lg-12 main-title">
			<h1 class="titleCss">员工信息管理</h1>
		</div>
		<div class="row" style="margin-top: 40px;">
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-md-5 col-lg-5 text-right" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">部门</p><span class="sign-left">:</span>
				</div>
				<div class="col-md-7 col-lg-7">
					<dept></dept>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-md-5 col-lg-5 text-right" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">岗位</p><span class="sign-left">:</span>
				</div>
				<div class="col-md-7 col-lg-7">
					<dept></dept>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-md-5 col-lg-5 text-right" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">姓名</p><span class="sign-left">:</span>
				</div>
				<div class="col-md-7 col-lg-7">
					<input class="form-control" type="text">
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-md-5 col-lg-5 text-right" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">手机号</p><span class="sign-left">:</span>
				</div>
				<div class="col-md-7 col-lg-7">
					<input class="form-control" type="text">
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">生日</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<dPicker value-type="format" format="DD"></dPicker>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">是否在职</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<select class="form-control" >
						<option value="">全部</option>
						<option value="1">在职</option>
						<option value="0">离职</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row" style="margin-top: 15px;padding-bottom:1.5%;">	
			<button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
			  >添加</button>
			<button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
			 >查询</button>
		</div>
		<div class="">
			<div class="col-md-12 col-lg-12">
				<div class="table-responsive pre-scrollable">
					<table class="table table-bordered table-hover" id="datatable" >
						
						<thead class="datathead">
							<tr>
								<th class="text-center">姓名</th>
								<th class="text-center">部门</th>
								<th class="text-center">岗位</th>
								<th class="text-center">手机号</th>
								<th class="text-center">出生日期</th>
								<th class="text-center">性别</th>
								<th class="text-center">身份证号</th>
								<th class="text-center">名族</th>
								<th class="text-center">政治面貌</th>
								<th class="text-center">入职时间</th>
								<th class="text-center">转正时间</th>
								<th class="text-center">离职时间</th>
								<th class="text-center">是否在职</th>
								<th class="text-center">修改</th>
							</tr>
						</thead>
						<tbody>
							<!-- <tr v-for="(item,index) in projectList" :key="index" v-on:dblclick="selectRule('3',item)">
								<td class="text-center" style="line-height:33px;">{{item.proId}}</td>
								<td class="text-center" style="line-height:33px;">{{item.storeName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.empName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.proName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.price}}</td>
								<td class="text-center" style="line-height:33px;">{{item.frequency}}</td>
								<td class="text-center" style="line-height:33px;">{{item.discount}}</td>
								<td class="text-center" style="line-height:33px;"><button type="button" class="btn btn-warning" v-on:click="selectRule('3',item)">修改</button></td>
							</tr> -->
						</tbody>
					</table>
				</div>
	              <!--分页插件-->
	              <div class="page">
	                  <!--这里时通过props传值到子级，并有一个回调change的函数，来获取自己传值到父级的值-->
	                  <!-- <paging ref="paging" @change="pageChange"></paging> -->
	              </div>
			</div>
			<div class="col-md-12 col-lg-12 posAb">
				<p class="tips">* 双击单行，可对当前数据进行修改</p>
			</div>
		</div>
		<!-- <div class="row row_edit">
			<div class="modal fade" id="projectContent">
				<div class="modal-dialog">
					<SubProject ref='subProject' @certainAction='feedBack'></SubProject>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	import dept from '../../common/Department.vue'
	import dPicker from 'vue2-datepicker'
	export default {
		components:{
			dept,
			dPicker,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
