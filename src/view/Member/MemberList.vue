<template>
  <div>
    <button style="float: right;">删除</button>
    <button style="float: right; margin-right:20px ;">添加</button>
    <table border>
      <tr>
        <th>用户</th>
        <th>会员等级</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>住址</th>
        </tr>
      <tr v-for="itme in member" :key="itme.id">
        <td align="center">
          <img :src="itme.twoimg_url"/>
        </td>

        <td align="center">
             11
        </td>

        <td align="center">
          {{itme.membername}}
        </td>

        <td align="center">
          <div v-if="itme.membersex">
            男
          </div align="center">
         <div v-if="!itme.membersex">
            女
          </div>
        </td>

        <td align="center">
          {{itme.number}}
        </td>
        <td align="center">
          {{itme.address}}
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name:"MemberList",
    data(){
      return{
        membername:'',
        membersex:'',
        number:'',
        address:'',
        member:[],
      }
    },

    created(){
      this.getmember()
    },

    methods:{
      getmember(){
        axios.get('/api/get/user').then(res=>{
          this.member=res.data.list
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
table{
	  width: 1000px;
	  height: 300px;
	  border-collapse: collapse;
	  border: 1px solid #d3d3d3;
	  color: #606060;
	  border-radius: 5px;
	  margin: 0 10px;
	}

table th{
    font-size: 16px;
    height:30px;
    font-weight: normal;
  }

  table td{
    font-size: 12px;
    padding: 5px;
  }

  table td:nth-last-child(4){
    width: 150px;
  }

  table td:nth-child(2){
    min-width: 100px;
  }

  table img{
    width: 80px;
    height: 80px;
  }

table .remove{
  background:red;
  text-align: center;
}

</style>
