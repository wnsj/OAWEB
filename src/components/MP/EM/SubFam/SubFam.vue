<!-- add and modify Education -->
<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" aria-hidden="true" class="close" v-on:click="closeCurrentPage()">×</button>
			<h4 id="myModalLabel" class="modal-title">{{title}}家庭成员</h4>
		</div>
		<div class="modal-body  pos_r">
			<div class="tab-pane fade in active martop" id="basic">
				<form action="" class="clearfix">
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">姓名</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="family.school" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">性别</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="family.professional" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">生日</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<dPicker style="width:100%" v-model="family.graduateDate" value-type="format" format="YYYY-MM-DD"></dPicker>
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">关系</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="family.profession" placeholder="">
						</div>
					</div>
					<div class="col-md-6 form-group clearfix">
						<label for="cyname" class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">手机号</label><span class="sign-left">:</span>
						<div class="col-md-8">
							<input type="text" class="form-control" v-model="family.certification" placeholder="">
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
				family:{
				},
				title:'',
			};
		},
		methods:{
			// Initialization family’s content
			initData(param,familyContent) {
				if(param=='add'){
					console.log('Initialization family’s content, which adds family')
					
					this.title='新增'
					
					this.family={
					}
					
				}else if(param=='modify'){
					console.log('Initialization family’s content, which modifies family')
					
					this.title='修改'
					// console.log(JSON.stringify(familyContent))
					Object.assign(this.family,familyContent)
					this.$refs.cha.setChaId(this.family.chaId)
					this.$refs.ind.setInd(this.family.indId)
					this.$refs.emp.setEmp(this.family.empId)
				}
			},
			
			//feedback position information
			indChange:function(param){
				console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.family.indId=""
				}else{
					this.family.indId=param.indId
				}
				console.log('岗位4：'+this.family.indId)
			},
			//feedback position information
			chaChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.family.chaId=""
				}else{
					this.family.chaId=param.chaId
				}
				// console.log('岗位4：'+this.family.posId)
			},
			//feedback position information
			empChange:function(param){
				// console.log('岗位3：'+JSON.stringify(param))
				if(this.isBlank(param)){
					this.family.empId=""
				}else{
					this.family.empId=param.empId
				}
				// console.log('岗位4：'+this.family.posId)
			},
			closeCurrentPage(){
				$("#famContent").modal("hide")
				console.log('关闭学历添加界面')
			},
			//the event of addtional button
			certainAction(){
				console.log('the event of addtional button')
				var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(^0{0,1}14[0-9]{9}$)|(^0{0,1}15[0-9]{9}$)|(^0{0,1}16[0-9]{9}$)|(^0{0,1}17[0-9]{9}$)|(^0{0,1}18[0-9]{9}$)/;
			
				
				if(this.isBlank(this.family.familyName)){
					alert("咨客姓名不能为空")
					return
				}
				if(this.isBlank(this.family.consDirection)){
					alert("咨客的咨询方向不能为空")
					return
				}
				if(this.isBlank(this.family.chaId)){
					alert("咨客的来源渠道不能为空")
					return
				}
				if(this.isBlank(this.family.empId) || this.family.empId==0){
					alert("接待人不能为空")
					return
				}
				if(this.isBlank(this.family.phone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.family.phone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.isBlank(this.family.urgentPhone)){
					alert("联系人电话不能为空")
					return
				}else if(reg.test(this.family.urgentPhone)==false){
					alert("不是完整的11位手机号或者正确的座机号！");
					return
				}
				if(this.family.address.length>20){
					alert('地址的长度不能超过20个字')
					return
				}
				if(this.family.address.length>100){
					alert('地址的长度不能超过100个字')
					return
				}
				
				switch(this.title){
					case '新增':
						var url = this.url + '/familyAction/addfamily';
						break;
					case '修改':
						var url = this.url + '/familyAction/updatefamily'
						break;	
				}
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data:this.family,
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

