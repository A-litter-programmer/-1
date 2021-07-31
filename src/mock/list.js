import Mock from 'mockjs'
const {list}= Mock.mock({
  'list|10-20':[{
    "id":"@increment(1)",
    "Goodname":"@cword(4)",
    "Gooddes":"@cparagraph(10,20)",
    "img_url":"@image('100x100','#ff83fa','#AA88AA','png','特殊商品')",
      "membername":"@cname(2,3)",
      "membersex|1":true,
      "number|20-40":1,
      "address":"@city(true)",
      "twoimg_url":"@image('100x100','#ff83fa','#AA88AA','png','人物像')",
  }],
})


Mock.mock('/api/get/user','get',()=>{
  return{
    status:200,
    msg:'获取成功',
    list,
    total:list.length
  }
})
