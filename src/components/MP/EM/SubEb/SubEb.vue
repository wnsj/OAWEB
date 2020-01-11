<!-- add and modify Employee -->
<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" aria-hidden="true" class="close" v-on:click="closeCurrentPage()">×</button>
			<h4 id="myModalLabel" class="modal-title">{{title}}咨客</h4>
		</div>
		<div class="modal-body  pos_r">
			<div class="tab-pane fade in active martop" id="basic">
				<form action="" class="clearfix">
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">姓名</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.empName" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">手机号</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.phone" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">生日</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<dPicker style="width:100%" v-model="employee.birthday" value-type="format" format="YYYY-MM-DD"></dPicker>
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">身份号</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.idCard" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">性别</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<select class="form-control" v-model="employee.sex">
								<option value="1">男</option>
								<option value="2">女</option>
							</select>
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">部门</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<!-- <cha ref="cha" @channelChange="chaChange"></cha> -->
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">岗位</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<!-- <emp ref="emp" @employeeChange="empChange"></emp> -->
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">行业</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<!-- <ind ref="ind" @industryChange="indChange"></ind> -->
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">紧急联系人</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.urgentName" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">联系电话</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.urgentPhone" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">微信号</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.vnum" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">邮箱地址</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="employee.email" placeholder="">
						</div>
					</div>
					
					<div class="col-md-12 form-group clearfix">
						<label for="cyname" class="col-md-2 control-label text-right nopad end-aline" style="width:12%;padding:0;line-height:34px;">户籍地址</label><span class="sign-left">:</span>
						<div class="col-md-10" style="width:84%;">
							<input type="text" class="form-control" v-model="employee.address" placeholder="">
						</div>
					</div>
					<div class="col-md-12 form-group clearfix">
						<label for="cyname" class="col-md-2 control-label text-right nopad end-aline" style="width:12%;padding:0;line-height:34px;">现住址</label><span class="sign-left">:</span>
						<div class="col-md-10" style="width:84%;">
							<input type="text" class="form-control" v-model="employee.address" placeholder="">
						</div>
					</div>
					<div class="col-md-12 form-group clearfix">
						<label for="cyname" class="col-md-2 control-label text-right nopad end-aline" style="width:12%;padding:0;line-height:34px;">备注</label><span class="sign-left">:</span>
						<div class="col-md-10" style="width:84%;">
							<input type="text" class="form-control" v-model="employee.marker" placeholder="">
						</div>
					</div>
					<div class="form-group clearfix">
						<div class="col-md-12">
							<button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal" v-on:click="closeCurrentPage()">返回</button>
							<button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal" v-on:click="certainAction()">确认</button>	
						</div>
					</div>
				</form>
			</div>
	
		</div>
		
	</div>
</template>

<script>
// 	import ind from '../../common/Industry.vue'
// 	import cha from '../../common/Channel.vue'
// 	import emp from '../../common/Employee.vue'
	
	import dPicker from 'vue2-datepicker'
	export default {
		components:{
			dPicker,
// 			ind,
// 			cha,
// 			emp,
		},
		data() {
			return {
				employee:{
				},
				title:'',
			};
		},
		methods:{
			// Initialization employee’s content
			initData(param,employeeContent) {
				if(param=='add'){
					console.log('Initialization employee’s content, which adds employee')
					
					this.title='新增'
					
					this.employee={
					}
					
				}else if(param=='modify'){
					console.log('Initialization employee’s content, which modifies employee')
					
					this.title='修改'
					// console.log(JSON.stringify(employeeContent))
					Object.assign(this.employee,employeeContent)
					this.$refs.cha.setChaId(this.employee.chaId)
					this.$refs.ind.setInd(this.employee.indId)
					this.$refs.emp.setEmp(this.employee.empId)
				}
			},
			
			//feedback position information
			indChange:function(param){
				console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.employee.indId=""
				}else{
					this.employee.indId=param.indId
				}
				console.log('岗位4：'+this.employee.indId)
			},
			//feedback position information
			chaChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.employee.chaId=""
				}else{
					this.employee.chaId=param.chaId
				}
				// console.log('岗位4：'+this.employee.posId)
			},
			//feedback position information
			empChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.employee.empId=""
				}else{
					this.employee.empId=param.empId
				}
				// console.log('岗位4：'+this.employee.posId)
			},
			closeCurrentPage(){
				$("#visContent").modal("hide")
				console.log('关闭添加患者界面')
			},
			//the event of addtional button
			certainAction(){
				console.log('the event of addtional button')
				var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(^0{0,1}14[0-9]{9}$)|(^0{0,1}15[0-9]{9}$)|(^0{0,1}16[0-9]{9}$)|(^0{0,1}17[0-9]{9}$)|(^0{0,1}18[0-9]{9}$)/;
			
				
				if(this.isBlank(this.employee.employeeName)){
					alert("咨客姓名不能为空")
					return
				}
				if(this.isBlank(this.employee.consDirection)){
					alert("咨客的咨询方向不能为空")
					return
				}
				if(this.isBlank(this.employee.chaId)){
					alert("咨客的来源渠道不能为空")
					return
				}
				if(this.isBlank(this.employee.empId) || this.employee.empId==0){
					alert("接待人不能为空")
					return
				}
				if(this.isBlank(this.employee.phone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.employee.phone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.isBlank(this.employee.urgentPhone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.employee.urgentPhone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.employee.address.length>20){
					alert('地址的长度不能超过20个字')
					return
				}
				if(this.employee.address.length>100){
					alert('地址的长度不能超过100个字')
					return
				}
				
				switch(this.title){
					case '新增':
						var url = this.url + '/employeeAction/addEmployee';
						break;
					case '修改':
						var url = this.url + '/employeeAction/updateEmployee'
						break;	
				}
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data:this.employee,
					dataType: 'json',
				}).then((response) => {
					var res = response.data
					console.log(res)
					if (res.retCode == '0000') {
						alert(res.retMsg)
						this.$emit('certainAction')
					}else{
						alert(res.retMsg)
					}
				}).catch((error) => {
					console.log('添加或者修改咨客信息失败')
				});
			},
			
		}
		
	}
</script>

<style>
	
</style>

