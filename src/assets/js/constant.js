import Cookies from 'js-cookie'

const constant = {};

/*判断值是否为空，是空返回true*/
constant.isBlank = function(value) {
  if (value == '' || value == null || value == undefined || (value.length >
      0 && value.trim().length == 0)) return true;
  return false;
}

//权限判断方法（包含返回true，反之false）
// {"accountId":"1","accountNum":"admin","accountPwd":"","accountName":"小强","accountState":"1","accountType":"2"}
constant.has = function(param) {
  //未传值
  if (this.isBlank(param)) return false;
  var jsonString = Cookies.get("accountData");
  //未登录
  if (this.isBlank(jsonString)) return false;
  var accountData = JSON.parse(jsonString);
  var permission = accountData.accountType;
  if (param == 1) {
    return permission >= 1;
  } else {
    return permission > 1;
  }
}
//账户的姓名
constant.accountName = function() {
  //未传值
  var jsonString = Cookies.get("accountData");
  //未登录
  if (this.isBlank(jsonString)) return false;
  var accountData = JSON.parse(jsonString);
	var accountName = accountData.accountName;
	return accountName
}
//账户的姓名
constant.accountId = function() {
  //未传值
  var jsonString = Cookies.get("accountData");
  //未登录
  if (this.isBlank(jsonString)) return false;
  var accountData = JSON.parse(jsonString);
	var accountId = accountData.accountId;
	return accountId
}

export default constant;
