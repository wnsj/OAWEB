// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import Cookies from 'js-cookie'
import constant from '../src/assets/js/constant'
// import utilDate from '../src/assets/js/utilDate'
import {
  exportTableToExcel
} from 'vendor/Export2Excel.js'


Vue.prototype.$ajax = axios
Vue.prototype.url = process.env.API_HOST


Vue.config.productionTip = false


// 路由卫士
// router.beforeEach((to, from, next) => {
//   // console.log("to:" + to.path + ",from:" + from.path)
//   if (to.path == '/login' && from.path == '/MainPage') {
//     next();
//   } else if (to.path == '/login') {
//     next();
//   } else {
//     let token = Cookies.get('accessToken');
//     let accountData = Cookies.get('accountData');
//     //console.log("token:" + token + ",accountData:" + accountData);
//     if (constant.isBlank(token) || constant.isBlank(accountData)) {
//       next('/login');
//     } else if (to.path == '/') {
//       next('/MainPage');
//     } else if (to.path == '/login') {
//       next('/MainPage');
//     } else if (to.path == '/sam/dist/index.html') {
//       next('/MainPage');
//     } else {
//       next();
//     }
//   }
// });

//token存储在cookie中的过期时间
Vue.prototype.accessTokenLife = 7
Vue.prototype.accountDataLife = 7
//是否使用前端设置cookie
Vue.prototype.isUseSetCookie = true

Vue.prototype.contentType = 'application/json;charset=utf-8'
/**
 * 判断是否为null
 */
Vue.prototype.isBlank = function(param) {
  return constant.isBlank(param)
}
/**
 * 时间过滤器
 */
Vue.filter('dateFormat', function(time, formatStr = 'YYYY-MM-DD HH:mm') {
  if (constant.isBlank(time)) {
    return null
  } else {
    return moment(time).format(formatStr)
  }
})
Vue.filter('dateFormatFilter', function(time, format) {
  var formatStr = 'YYYY-MM-DD HH:mm'
  if (constant.isBlank(time)) {
    return null;
  } else {
    formatStr = constant.isBlank(format) ? formatStr : format;
    return moment(time).format(formatStr)
  }
})
Vue.prototype.moment = function(targetDate, format) {
  var formatStr = "YYYY-MM-DD HH:mm:ss"
  var momentObj = moment();
  if (!constant.isBlank(targetDate)) {
    momentObj = moment(targetDate);
  }
  if (!constant.isBlank(format)) formatStr = format;
  return momentObj.format(formatStr);
}

/**
 * 导出表格
 */
Vue.prototype.exportTableToExcel = function(tbId, fileName) {
  if (!confirm("确定导出?")) {
    return;
  }
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var date = myDate.getDate();
  exportTableToExcel(tbId, fileName + '_' + year + '_' + month + '_' + date);
}


//权限判断方法（包含返回true，反之false）
Vue.prototype.has = function(param) {
  return constant.has(param);
}
//账户的名字
Vue.prototype.accountName = function() {
  return constant.accountName();
}
//账户的ID
Vue.prototype.accountId = function() {
  return constant.accountId();
}
/*
 **权限判断使用方法:
 ** 1.<div v-has='1'> 测试内容1</div>
 ** 2.<div v-if='has(25)'> 测试内容2</div>
 */
//自定义指令v-has(不包含则删除该标签)
Vue.directive('has', {
  inserted: function(el, binding) {
    if (!constant.has(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
