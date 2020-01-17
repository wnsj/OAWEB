<!-- add and modify shift -->
<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" aria-hidden="true" class="close" v-on:click="closeCurrentPage()">×</button>
			<h4 id="myModalLabel" class="modal-title">{{title}}岗位调动</h4>
		</div>
		<div class="modal-body  pos_r">
			<div class="tab-pane fade in active martop" id="basic">
				<form action="" class="clearfix">
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">调动前部门</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="shift.beforePosName" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">调动后部门</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="shift.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">调动钱岗位</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="shift.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">调动后岗位</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="shift.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">调岗类型</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="shift.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">生效时间</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<dPicker style="width:100%" v-model="shift.graduateDate" value-type="format" format="YYYY-MM-DD"></dPicker>
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
				shift:{
				},
				title:'',
			};
		},
		methods:{
			// Initialization shift’s content
			initData(param,shiftContent) {
				if(param=='add'){
					console.log('Initialization shift’s content, which adds shift')
					
					this.title='新增'
					
					this.shift={
					}
					
				}else if(param=='modify'){
					console.log('Initialization shift’s content, which modifies shift')
					
					this.title='修改'
					// console.log(JSON.stringify(shiftContent))
					Object.assign(this.shift,shiftContent)
					this.$refs.cha.setChaId(this.shift.chaId)
					this.$refs.ind.setInd(this.shift.indId)
					this.$refs.emp.setEmp(this.shift.empId)
				}
			},
			
			//feedback position information
			indChange:function(param){
				console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.shift.indId=""
				}else{
					this.shift.indId=param.indId
				}
				console.log('岗位4：'+this.shift.indId)
			},
			//feedback position information
			chaChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.shift.chaId=""
				}else{
					this.shift.chaId=param.chaId
				}
				// console.log('岗位4：'+this.shift.posId)
			},
			//feedback position information
			empChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.shift.empId=""
				}else{
					this.shift.empId=param.empId
				}
				// console.log('岗位4：'+this.shift.posId)
			},
			closeCurrentPage(){
				$("#shiftContent").modal("hide")
				console.log('关闭学历添加界面')
			},
			//the event of addtional button
			certainAction(){
				console.log('the event of addtional button')
				var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(^0{0,1}14[0-9]{9}$)|(^0{0,1}15[0-9]{9}$)|(^0{0,1}16[0-9]{9}$)|(^0{0,1}17[0-9]{9}$)|(^0{0,1}18[0-9]{9}$)/;
			
				
				if(this.isBlank(this.shift.shiftName)){
					alert("咨客姓名不能为空")
					return
				}
				if(this.isBlank(this.shift.consDirection)){
					alert("咨客的咨询方向不能为空")
					return
				}
				if(this.isBlank(this.shift.chaId)){
					alert("咨客的来源渠道不能为空")
					return
				}
				if(this.isBlank(this.shift.empId) || this.shift.empId==0){
					alert("接待人不能为空")
					return
				}
				if(this.isBlank(this.shift.phone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.shift.phone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.isBlank(this.shift.urgentPhone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.shift.urgentPhone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.shift.address.length>20){
					alert('地址的长度不能超过20个字')
					return
				}
				if(this.shift.address.length>100){
					alert('地址的长度不能超过100个字')
					return
				}
				
				switch(this.title){
					case '新增':
						var url = this.url + '/shiftAction/addshift';
						break;
					case '修改':
						var url = this.url + '/shiftAction/updateshift'
						break;	
				}
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data:this.shift,
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

