import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/system/Login'
import {storage} from "../store/storage"

Vue.use(Router)

const router=new Router({
  routes: [
      {
    path: '/Login',
    name: 'Login',
    meta: {
          label: '登录',
          requireAuth: false,//判断是否需要登录
        },
    component: Login
  },
  {
    path: '/',
    name: '主页',
    meta: {
      label: '主页',
      requireAuth: true,//判断是否需要登录
    },
    component: ()=>import("../view/home/home")
  }
  ]
})
router.beforeEach(async (to, from, next) => {
  /** 判断用户是否已经登录 */
 const  user= storage.getUserInfo();
 var state= to.meta.requireAuth;
 if(state){
   if (user==null) {
    next("/Login");
   }
 }
 next();

});

export  default router;

