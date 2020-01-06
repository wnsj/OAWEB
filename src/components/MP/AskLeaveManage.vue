<template>
  <!-- 请假管理 -->
  <div class="container user-container" id="employee-app">
    <div class="row">
      <div class="col-md-12 col-lg-12 main-title">
        <h2>请假管理</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <select v-model="dateType">
          <option value="0">--未选择--</option>
          <option value="1">申请日期</option>
          <option value="2">休假日期</option>
        </select>

        <div class="col-md-11 col-lg-11">
          <span class="leavespan">
            <dPicker v-model="begDate"></dPicker>
          </span> <span class="leavespan01">&nbsp;&nbsp;&nbsp;至：</span>
          <span class="leavespan">
            <dPicker v-model="endDate"></dPicker>
          </span>
        </div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="col-md-2 col-lg-2" style="padding: 0; line-height: 34px;">
          <p>部门：</p>
        </div>
        <div class="col-md-10 col-lg-10">
          <depart @departChange='departChange'></depart>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div class="col-md-4 col-lg-4" style="padding: 0; line-height: 34px;">
          <p>姓名：</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <span>
            <input type="text" value="" class="form-control" v-model="empName" />
          </span>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div class="col-md-4 col-lg-4" style="padding: 0; line-height: 34px;">
          <p>状态：</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <select class="form-control" v-model="advState">
            <option value="0">全部</option>
            <option value="1">处理中</option>
            <option value="2">已通过</option>
            <option value="3">未通过</option>
          </select>
        </div>
      </div>

    </div>

    <div class="row add-mt">
      <div style="padding: 0; width:3.3%; display:inline-block; float:left; margin-left:15px; line-height: 34px; font-size:0;">
        <p>项目：</p>
      </div>
      <button type="button" class="btn btn-warning pull-right m_r_10" data-toggle="modal" v-on:click="askOfLeaveList()">查询</button>

    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordered table-hover user-table" id="datatable">
            <thead>
              <tr>
                <th class="text-center">申请人</th>
                <th class="text-center">类型</th>
                <th class="text-center">部门</th>
                <th class="text-center">申请时间</th>
                <th class="text-center">开始时间</th>
                <th class="text-center">结束时间</th>
                <th class="text-center">说明</th>
                <th class="text-center">审查人</th>
                <th class="text-center">审查结果</th>
                <th class="text-center">审核人</th>
                <th class="text-center">审核结果</th>
                <th class="text-center">批准人</th>
                <th class="text-center">批准结果</th>
                <th class="text-center">取消</th>
              </tr>
            </thead>
            <thead>
              <tr v-for="(item) in askLeaveList" :key="item.alId">
                <th class="text-center">{{item.empName}}</th>
                <th class="text-center">{{item.ltName}}</th>
                <th class="text-center">{{item.deptName}}</th>
                <th class="text-center">{{item.createDate}}</th>
                <th class="text-center">{{item.begDate}}</th>
                <th class="text-center">{{item.endDate}}</th>
                <th class="text-center">{{item.remark}}</th>
                <th class="text-center">{{item.examinerName}}</th>
                <th class="text-center">{{item.examinerAdv == '0' ? '未审核' : item.examinerAdv == '1' ? '通过' : '未通过'}}</th>
                <th class="text-center">{{item.auditorName}}</th>
                <th class="text-center">{{item.auditorAdv == '0' ? '未审核' : item.auditorAdv == '1' ? '通过' : '未通过'}}</th>
                <th class="text-center">{{item.approverName}}</th>
                <th class="text-center">{{item.approverAdv == '0' ? '未审核' : item.approverAdv == '1' ? '通过' : '未通过'}}</th>
                <th class="text-center">
                  <button value="" v-if="item.state == 0" @click="cancelAsk(item.alId)">点击取消</button>
                  <button value="" v-if="item.state == 1" :disabled="true">已取消</button>
                </th>
              </tr>
            </thead>
          </table>
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
        begDate: this.moment(),
        endDate: this.moment(),
        empName: '',
        advState: 0,
        askLeaveList: []
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
      //查询请假数据
      askOfLeaveList() {
        var url = this.url + "/askLeaveAction/queryAskLeave";
        var rquestParam = {
          deptId: this.deptId,
          empName: this.empName,
          advState: this.advState
        };
        if (this.dateType == '1' && !this.isBlank(this.begDate) && !this.isBlank(this.endDate)) {
          rquestParam.createBegDate = this.begDate;
          rquestParam.createEndDate = this.endDate;
        } else if (this.dateType == '2' && !this.isBlank(this.begDate) && !this.isBlank(this.endDate)) {
          rquestParam.qBegDate = this.begDate;
          rquestParam.qEndDate = this.endDate;
        }
        this.requestData(url, rquestParam).then((responseData) => {
          if (responseData.retCode == '0000') {
            this.askLeaveList = responseData.retData;
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
        var url = this.url + "/askLeaveAction/operationLeave";
        var rquestParam = {
          alId: value,
          state: 1
        }
        this.requestData(url, rquestParam).then((responseData) => {
          if (responseData.retCode == '0000') {
              alert("成功!")
          } else {
            alert(responseData.retMsg);
          }
          this.askOfLeaveList();
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
