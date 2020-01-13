<template>
  <select class="form-control" v-model="deptId" v-on:change="departChange()">
    <option value="0">--未选择--</option>
    <option v-for="(item,index) in departmentList" :key="index" v-bind:value="item.deptId">
      {{item.deptName}}
    </option>
  </select>
</template>

<script>

  export default {
    name: 'department',
    data() {
      return {
        departName: '',
        deptId: '0',
        departmentList: [],
				deptObj:{},
      };
    },
    methods: {
      //提交部门名称和ID
      departChange: function () {

        this.deptObj = this.exchangeDepartName(this.deptId)
        this.$emit('departChange', this.deptObj)
      },
      setDpart: function (deptId) {
        this.deptId = deptId
				console.log('设置部门'+this.deptId)
      },
      //添加前缀的部门名字兑换原来的名字
      exchangeDepartName: function (param) {
        var dp = {}
        for (var i = 0; i < this.departmentList.length; i++) {
          dp = this.departmentList[i];
          if (dp.deptId == param) {
            return dp
          }
        }
      },

      async getDepartment() {
        var url = this.url + '/departmentAction/queryDepartment'
        this.$ajax({
        	method: 'POST',
        	url: url,
        	headers: {
        		'Content-Type': this.contentType,
        		'Access-Token': this.accessToken
        	},
        	data: {
						isuse:'1'
        	},
        	dataType: 'json',
        }).then((response) => {
        	var res = response.data
        	if (res.retCode == '0000') {
        		if (res.retData.length > 0) {
        			this.departmentList = res.retData
        		}
        	} else {
        		alert(res.retMsg)
        	}

        }).catch((error) => {
        	console.log('请求失败处理')
        });
      },

    },
    created() {
      this.getDepartment()
    },
  }
</script>

<style>

</style>
