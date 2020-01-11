<template>
	<div class="wraper">
		<div class="col-md-12 col-lg-12 main-title">
			<h1 class="titleCss">岗位调动管理</h1>
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
								<th class="text-center">员工姓名</th>
								<th class="text-center">调动前部门</th>
								<th class="text-center">调动前岗位</th>
								<th class="text-center">调动后部门</th>
								<th class="text-center">调动后岗位</th>
								<th class="text-center">调动时间</th>
								<th class="text-center">调岗类型</th>
								<th class="text-center">修改</th>
							</tr>
						</thead>
						<!-- <tbody>
							<tr v-for="(item,index) in projectList" :key="index" v-on:dblclick="selectRule('3',item)">
								<td class="text-center" style="line-height:33px;">{{item.proId}}</td>
								<td class="text-center" style="line-height:33px;">{{item.storeName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.empName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.proName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.price}}</td>
								<td class="text-center" style="line-height:33px;">{{item.frequency}}</td>
								<td class="text-center" style="line-height:33px;">{{item.discount}}</td>
								<td class="text-center" style="line-height:33px;"><button type="button" class="btn btn-warning" v-on:click="selectRule('3',item)">修改</button></td>
							</tr>
						</tbody> -->
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
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
