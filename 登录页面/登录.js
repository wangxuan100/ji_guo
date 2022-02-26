function aaa(){
    var phone=document.getElementById("phone")
var psw1=document.getElementById("psw1")
var promptlyRegister=document.getElementById("promptlyRegister")
var oError=document.getElementById("error_box")
var isError = true;
 if (phone.value.length > 20 || phone.value.length < 6) {
  oError.innerHTML = "用户名请输入6-20位字符";
alert("用户名请输入6-20位字符")
  isError = false;
  return;
 }else if((phone.value.charCodeAt(0)>=48) && (phone.value.charCodeAt(0)<=57)){
//   oError.innerHTML = "首字符必须为字母";
alert("首字符必须为字母")
  return;
 }else for(var i=0;i<phone.value.charCodeAt(i);i++){
  if((phone.value.charCodeAt(i)<48)||(phone.value.charCodeAt(i)>57) && (phone.value.charCodeAt(i)<97)||(phons.value.charCodeAt(i)>122)){
//    oError.innerHTML = "必须为字母跟数字组成";
alert("首字符必须为字母")
   return;
  }
 }
 
 if (psw1.value.length > 20 || psw1.value.length < 6) {
//   oError.innerHTML = "密码请输入6-20位字符"
alert("密码请输入6-20位字符")
  isError = false;
  return;
 }
 window.alert("登录成功")
}
