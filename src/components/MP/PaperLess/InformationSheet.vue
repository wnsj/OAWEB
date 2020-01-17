<template>
	<div class="root">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 headnew">
			<div class="img_title">
				<img src="@/assets/img/logo_03.jpg">
				<h2>信息单管理</h2>
			</div>

			<div class="shenqdata">
				<select v-model="dateType">
					<option value="0">--未选择--</option>
					<option value="1">申请日期</option>
				</select>

				<span class="leavespan">
					<dPicker v-model="begDate" value-type="format" format="YYYY-MM-DD"></dPicker>
				</span> <span class="leavespan01" style="font-size: 16px">至</span>
				<span class="leavespan">
					<dPicker v-model="endDate" value-type="format" format="YYYY-MM-DD"></dPicker>
				</span>
				<div class="bumen">
					<p style="font-size: 16px">部门：</p>
					<div>
						<depart @departChange='departChange'></depart>
					</div>
				</div>
				<div class="xingming">
					<p style="color: #fff; font-size: 16px;">姓名：</p>
					<span>
						<input type="text" value="" class="form-control" v-model="senderName" style="background-color: #c7e5e7;line-height: 40px; display: block; height: 40px; float:left;  width:100px;margin-left:10px" />
					</span>

				</div>
				<div class="zhuangtai">
					<p style="color: #fff;font-size: 16px">状态：</p>
					<select class="form-control" v-model="state" style="background-color: #c7e5e7;" id="ztselect">
						<option value="0">全部</option>
						<option value="2">处理中</option>
						<option value="3">已通过</option>
						<option value="4">未通过</option>
						<option value="1">已取消</option>
					</select>

				</div>
				<div id="queryDiv">
					<button type="button" class="btn btn-warning pull-left m_r_10" data-toggle="modal" v-on:click="checkInformationSheetList()"
					 id="chax">查询</button>

				</div>
			</div>

		</div>
		<div class="row" id="mainbox">
			<div class="col-md-12 col-lg-12">
				<div class="table-responsive">
					<table class="table table-bordered table-hover user-table" id="datatable">
						<thead>
							<tr>
								<th class="text-center">信息单类型</th>
								<th class="text-center">重要程度</th>
								<th class="text-center">主题</th>
								<th class="text-center">申请内容</th>
								<th class="text-center">要求/期望</th>
								<th class="text-center">申请时间</th>
								<th class="text-center">发出部门</th>
								<th class="text-center">发出负责人意见</th>
								<th class="text-center">接收部门</th>
								<th class="text-center">接收负责人意见</th>
								<th class="text-center">抄送人</th>
								<th class="text-center">取消</th>
							</tr>
						</thead>
						<thead>
							<tr v-for="(item) in sheetList" :key="item.alId" :style="setBgColor(item)">
								<th class="text-center" v-if="item.sheetType == 1">通知</th>
								<th class="text-center" v-if="item.sheetType == 2">备忘录</th>
								<th class="text-center" v-if="item.sheetType == 3">协作申请</th>
								<th class="text-center" v-if="item.sheetType == 4">其他</th>
								<th class="text-center" v-if="item.degreeType == 1">一般沟通</th>
								<th class="text-center" v-if="item.degreeType == 2">需回复</th>
								<th class="text-center" v-if="item.degreeType == 3">紧急</th>
								<th class="text-center" v-if="item.degreeType == 4">重要</th>
								<th class="text-center">{{item.theme}}</th>
								<th class="text-center">{{item.content}}</th>
								<th class="text-center">{{item.requireContent}}</th>
								<th class="text-center">{{item.sendDate}}</th>
								<th class="text-center">{{item.deptSendName}}</th>
								<th class="text-center">{{item.sendAgree == '0' ? '未审核' : item.sendAgree == '1' ? '通过' : '未通过'}}</th>
								<th class="text-center">{{item.deptRecName}}</th>
								<th class="text-center">{{item.recAgree == '0' ? '未审核' : item.recAgree == '1' ? '通过' : '未通过'}}</th>
								<th class="text-center">{{item.empName}}</th>
								<th class="text-center">
									<button class="btn btn-default" v-if="item.state != 1" @click="cancelAsk(item.infId)">点击取消</button>
									<button class="btn btn-default" v-if="item.state == 1" :disabled="true">已取消</button>
								</th>
							</tr>
						</thead>
					</table>
					<div class="backse" style="width:100%; padding:20px 0">
						<span :style="pass">通过审核</span>
						<span :style="chuLing">处理中</span>
						<span :style="unPass">未通过审核</span>
						<span :style="cancaled">已取消</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import dPicker from 'vue2-datepicker'
	import depart from '@/components/common/Department.vue'

	export default {
		components: {
			dPicker,
			depart
		},
		data() {
			return {
				dateType: 0,
				deptId: '',
				begDate: this.moment(new Date(), 'YYYY-MM-DD'),
				endDate: this.moment(new Date(), 'YYYY-MM-DD'),
				senderName: '',
				state: 0,
				sheetList: [],
				pass: 'padding:10px;background-color:#85c6ca ;',
				chuLing: 'padding:10px;background-color:#e2f2f2',
				unPass: 'padding:10px;background-color: #ead5d5',
				cancaled: 'padding:10px;background-color: #CCCCCC;'
			}
		},
		methods: {
			//切换部门
			departChange(value) {
				if (value == null) this.deptId = ''
				else this.deptId = value.deptId
			},
			//公共请求方法,返回响应数据
			requestData(url, rquestParam) {
				return new Promise((resolve, reject) => {
					axios({
						method: "post",
						url: url,
						headers: {
							"Content-Type": this.contentType,
							"Access-Token": this.$root.accountAccessToken
						},
						data: rquestParam,
						dataType: "json"
					}).then((response) => {
						resolve(response.data);
					}).catch(
						function(error) {
							reject(error)
						}
					);
				});
			},
			//处理背景颜色
			setBgColor(obj) {
			    if (obj.state == '1') {
			        return this.cancaled;
			    } else if (obj.state == '2') {
			        return this.chuLing;
			    } else if (obj.state == '3') {
			        return this.pass;
			    } else if (obj.state == '4') {
			        return this.unPass;
			    }
			},
			//查询倒休
			checkInformationSheetList() {
				var url = this.url + "/informationSheetAction/queryInformationSheet";
				var rquestParam = {
					deptSendId: this.deptId,
					senderName: this.senderName,
					state: this.state
				};
				if (this.dateType == '1' && !this.isBlank(this.begDate) && !this.isBlank(this.endDate)) {
					rquestParam.createBegDate = this.begDate;
					rquestParam.createEndDate = this.endDate;
				} else if (this.dateType == '2' && !this.isBlank(this.begDate) && !this.isBlank(this.endDate)) {
					rquestParam.restDateBeg = this.begDate;
					rquestParam.restDateEnd = this.endDate;
				} else if (this.dateType == '3' && !this.isBlank(this.begDate) && !this.isBlank(this.endDate)) {
					rquestParam.overtimeBeg = this.begDate;
					rquestParam.overtimeEnd = this.endDate;
				}
				this.requestData(url, rquestParam).then((responseData) => {
					if (responseData.retCode == '0000') {
						this.sheetList = responseData.retData;
					} else {
						alert(responseData.retMsg);
					}
				}, (error) => {
					console.log("请求失败处理");
				});
			},
			//取消
			cancelAsk(value) {
				if (!confirm("确定取消?取消后不可恢复.")) return;
				var url = this.url + "/informationSheetAction/operationInformationSheet";
				var rquestParam = {
					infId: value,
					state: 1
				}
				this.requestData(url, rquestParam).then((responseData) => {
					if (responseData.retCode == '0000') {
						alert("成功!")
					} else {
						alert(responseData.retMsg);
					}
					this.checkInformationSheetList();
				}, (error) => {
					console.log("请求失败处理");
				});
			}
		},
		created() {

		}
	}
</script>

<style>
</style>
