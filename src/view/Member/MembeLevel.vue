<template>
  <div>
    <table border>
      <tr>
        <th>会员等级</th>
        <th>会员特权</th>
        </tr>
      <tr>
        <td>普通会员</td>
        <td>非凡全球旅行
            私人飞机礼遇
            全球机场贵宾厅礼遇
            </td>
        </tr>
        <tr>
          <td>高级会员</td>
          <td>
            私人飞机礼遇
            全球机场贵宾厅礼遇
            精选高档餐厅特别礼待
            专属私密活动
          </td>
        </tr>
        <tr>
          <td>超级会员</td>
          <td>高级私人会所礼遇
              私人飞机礼遇
              全球机场贵宾厅礼遇
              精选高档餐厅特别礼待
              专属私密活动
              </td>
        </tr>
    </table>
  </div>
</template>

<script>
  export default{
    name:"MemberLevel"
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
