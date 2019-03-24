<template>
  <div style="width:100%;overflow-x: hidden;">
    <mt-header  title="登录"></mt-header>
    <div style="padding: 10px 0" >
      <div >
        <mt-field @blur.native.capture="validateUsername" @focus.native.capture="validateUsername"  label="用户名" placeholder="请输入用户名" :state="userInfoState.usernameState" v-model="username"></mt-field>
        <mt-field  @blur.native.capture="validatePassword" @focus.native.capture="validatePassword"label="密码" placeholder="请输入密码" type="password" :state="userInfoState.passwordState" v-model="password"></mt-field>
      </div>

      <div style="padding: 10px;">
        <div >
          <mt-button size="small" @click="submit" style="width: 100%" type="primary">登录</mt-button>
        </div>
        <div >
          <a style="float: left;color:#26a2ff;font-size: 12px">忘记密码？</a>
          <a style="float: right;color:#26a2ff;font-size: 12px">注册新用户</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import {storage} from "../../store/storage";

  export default {
        name: "Login",
      data(){
          return{
            username:"",
            password:"",
            userInfoState:{
              usernameState:"",
              passwordState:"",
            }
          }
      },
      methods:{
       /*
       /^[A-Za-z0-9]+$/;//判断是否使字母和数字组合
         /^[\u4E00-\u9FA5]+$/;//判断是否为纯汉字
         /^[\d]+$/;//判断是否全为数字
        */
        validateUsername(){
          var regexU=  /^[\d]+$/;
            if(this.username==""){ this.userInfoState.usernameState="error"; }
            else if(!regexU.test(this.username)){ this.userInfoState.usernameState="warning";}
            else {this.userInfoState.usernameState="success";}
          },
        validatePassword(){
          var regexP=/^[A-Za-z0-9]+$/;
          if(this.password==""){ this.userInfoState.passwordState="error"; }
          else if(!regexP.test(this.password)){ this.userInfoState.passwordState="warning";}
          else {this.userInfoState.passwordState="success";}
        },
        submit(){
          if(this.username!=""&&this.password!=""&&this.userInfoState.usernameState=="success"&&this.userInfoState.passwordState=="success"){
          var userInfo={
            username:this.username,
            password:this.password
          };
           storage.setUserInfo(userInfo);
           this.$router.push({path:"/"});
          }
        }
      },
    }
</script>

<style scoped>

</style>
