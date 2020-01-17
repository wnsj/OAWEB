<!-- add and modify Education -->
<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" aria-hidden="true" class="close" v-on:click="closeCurrentPage()">×</button>
			<h4 id="myModalLabel" class="modal-title">{{title}}学历信息</h4>
		</div>
		<div class="modal-body  pos_r">
			<div class="tab-pane fade in active martop" id="basic">
				<form action="" class="clearfix">
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">学校</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="education.school" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">专业</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="education.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">毕业时间</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<dPicker style="width:100%" v-model="education.graduateDate" value-type="format" format="YYYY-MM-DD"></dPicker>
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">职称</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="education.profession" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">资格证</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="education.certification" placeholder="">
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
				education:{
				},
				title:'',
			};
		},
		methods:{
			// Initialization education’s content
			initData(param,educationContent) {
				if(param=='add'){
					console.log('Initialization education’s content, which adds education')
					
					this.title='新增'
					
					this.education={
					}
					
				}else if(param=='modify'){
					console.log('Initialization education’s content, which modifies education')
					
					this.title='修改'
					// console.log(JSON.stringify(educationContent))
					Object.assign(this.education,educationContent)
					this.$refs.cha.setChaId(this.education.chaId)
					this.$refs.ind.setInd(this.education.indId)
					this.$refs.emp.setEmp(this.education.empId)
				}
			},
			
			//feedback position information
			indChange:function(param){
				console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.education.indId=""
				}else{
					this.education.indId=param.indId
				}
				console.log('岗位4：'+this.education.indId)
			},
			//feedback position information
			chaChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.education.chaId=""
				}else{
					this.education.chaId=param.chaId
				}
				// console.log('岗位4：'+this.education.posId)
			},
			//feedback position information
			empChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.education.empId=""
				}else{
					this.education.empId=param.empId
				}
				// console.log('岗位4：'+this.education.posId)
			},
			closeCurrentPage(){
				$("#eduContent").modal("hide")
				console.log('关闭学历添加界面')
			},
			//the event of addtional button
			certainAction(){
				console.log('the event of addtional button')
				var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(^0{0,1}14[0-9]{9}$)|(^0{0,1}15[0-9]{9}$)|(^0{0,1}16[0-9]{9}$)|(^0{0,1}17[0-9]{9}$)|(^0{0,1}18[0-9]{9}$)/;
			
				
				if(this.isBlank(this.education.educationName)){
					alert("咨客姓名不能为空")
					return
				}
				if(this.isBlank(this.education.consDirection)){
					alert("咨客的咨询方向不能为空")
					return
				}
				if(this.isBlank(this.education.chaId)){
					alert("咨客的来源渠道不能为空")
					return
				}
				if(this.isBlank(this.education.empId) || this.education.empId==0){
					alert("接待人不能为空")
					return
				}
				if(this.isBlank(this.education.phone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.education.phone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.isBlank(this.education.urgentPhone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.education.urgentPhone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.education.address.length>20){
					alert('地址的长度不能超过20个字')
					return
				}
				if(this.education.address.length>100){
					alert('地址的长度不能超过100个字')
					return
				}
				
				switch(this.title){
					case '新增':
						var url = this.url + '/educationAction/addEducation';
						break;
					case '修改':
						var url = this.url + '/educationAction/updateEducation'
						break;	
				}
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data:this.education,
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

