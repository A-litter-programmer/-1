import Vue from 'vue'
import Router from 'vue-router'
import Enter from '../view/Enter.vue'
import Main from '../view/main.vue'
import Createuser from '../view/createuser.vue'
import Forgetp from '../view/Forgetp.vue'
import MemberList from '../view/Member/MemberList.vue'
import MemberLevel from '../view/Member/MembeLevel.vue'
import GoodKinds from '../view/Goods/GoodKinds.vue'
import GoodList from '../view/Goods/GoodList.vue'
import NotFound from '../view/NotFound.vue'
import Personal from '../view/Personal.vue'


Vue.use(Router);

export default new Router({
  // mode:'history',
  routes:[
    //登录页
    {
    path:'/enter',
    name:'Enter',
    component:Enter
  },
  //首页
  {
    path:'/main',
    name:'Main',
    component:Main,
    children:[
      //会员列表
      {
      path:'/member/list',
      name:'MemberList',
      component:MemberList
    },
    //会员等级
    {
      path:'/member/level',
      name:'MemberLevel',
      component:MemberLevel
    },
    //商品列表
    {
      path:'/Good/Kinds',
      name:'GoodKinds',
      component:GoodKinds
    },
    //商品等级
    {
      path:'/Good/List',
      name:'GoodList',
      component:GoodList
    }
    ]
  },
  //创建用户界面
  {
    path:'/createuser',
    name:'Createuser',
    component:Createuser
  },
  //忘记密码
  {
    path:'/forgetp',
    name:'Forgetp',
    component:Forgetp
  },
  //用户中心
  {
	  path:'/personal',
	  name:'Personal',
	  component:Personal
  },
  //404
  {
    path:'*',
    component:NotFound
  }

  ]
})
