<template>
  <div class="root">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 headnew">
      <div class="img_title">
        <img src="../../src/assets/img/logo_03.jpg">
        <h2>请假管理</h2>
      </div>

      <div class="shenqdata">

        <select v-model="dateType">
          <option value="0">--未选择--</option>
          <option value="1">申请日期</option>
          <option value="2">休假日期</option>
        </select>



        <span class="leavespan">
          <dPicker v-model="begDate" value-type="format" format="YYYY-MM-DD"></dPicker>
        </span> <span class="leavespan01" style="font-size: 16px">至：</span>
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
            <input type="text" value="" class="form-control" v-model="empName" style="background-color: #c7e5e7;line-height: 40px; display: block; height: 40px; float:left;  width:55%" />
          </span>

        </div>
        <div class="zhuangtai">

          <p style="color: #fff;font-size: 16px">状态：</p>


          <select class="form-control" v-model="advState" style="background-color: #c7e5e7;" id="ztselect">
            <option value="0">全部</option>
            <option value="1">处理中</option>
            <option value="2">已通过</option>
            <option value="3">未通过</option>
            <option value="4">已取消</option>
          </select>

        </div>
        <div class="row add-mt">
          <button type="button" class="btn btn-warning pull-left m_r_10" data-toggle="modal" v-on:click="askOfLeaveList()"
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
                <th class="text-center">申请人</th>
                <th class="text-center">类型</th>
                <th class="text-center">部门</th>
                <th class="text-center">申请时间</th>
                <th class="text-center">开始时间</th>
                <th class="text-center">结束时间</th>
                <th class="text-center">请假说明</th>
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
              <tr v-for="(item) in askLeaveList" :key="item.alId" :style="setBgColor(item)">
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
                  <button class="btn btn-default" v-if="item.state == 0" @click="cancelAsk(item.alId)">点击取消</button>
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
        empName: '',
        advState: 0,
        askLeaveList: [],
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
      },
      //处理背景颜色
      setBgColor(obj) {
        if (obj.state == '1') return this.cancaled;
        else if (obj.approverAdv == '1') {
          return this.pass;
        } else if ((obj.examinerAdv != '2' && obj.auditorAdv != '2' && obj.approverAdv != '2') && (obj.examinerAdv ==
            '0' || obj.examinerAdv == '1' || obj.auditorAdv == '0' || obj.auditorAdv == '1' ||
            obj.approverAdv == '0' || obj.approverAdv == '1')) {
          return this.chuLing;
        } else {
          return this.unPass;
        }
      }
    },
    created() {

    }
  }
</script>

<style>

</style>
