<template>
  <div>

    <table  border>
      <tr>
        <th>图片</th>
        <th>商品名称</th>
        <th>商品描述</th>
        <th>操作</th>
        </tr>
      <tr v-for="itme in newlist" :key="itme.id">
        <td align="center">
         <img :src="itme.img_url"/>
        </td>
        <td align="center">
           {{itme.Goodname}}
        </td>
        <td align="center">
          {{itme.Gooddes}}
        </td>
        <td align="center">
          <button type="button" class="remove">删除</button>
        </td>
        </tr>
    </table>

  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name:"GoodKinds",
    data() {
      return {
        Goodname: '',
        Gooddes: '',
        newlist:[],
        }
      },
      created() {
        this.getnewlist()
      },

    methods:{
      getnewlist(){
          axios.get('/api/get/user').then(res=>{
            this.newlist=res.data.list
            // console.log(res)
          })
       }
    }
  }
</script>

<style>

table{
  width: 900px;
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
