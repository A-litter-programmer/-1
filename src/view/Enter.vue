<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="enter-box">
      <h2 style="color: #303133; text-align: center;">欢迎登录</h2>

      <el-form-item label="账户:" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item style="float:left;">
        <el-button type="primary" @click="create">注册新用户</el-button>
      </el-form-item>

      <el-form-item style="float:left;margin-left: 30px;">
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>

      <el-form-item style="float:right;">
        <el-button type="primary" @click="findpassword">忘记密码</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Enter',
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
       }
      },
     methods: {
       //登录判断
        submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    this.$router.push({name:'Main',params:{name:this.form.name}});
                  }  else {
                    this.$message({
                              message: '请输入账号和密码',
                              type: 'warning',
                              });
                    return false;
                  }
                });
              },
       //注册
       create(){
         this.$router.push("/createuser")
       },
       //找回密码
       findpassword(){
         this.$router.push("/forgetp")
       }
      }
    }
</script>

<style scoped>
  .enter-box {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 40px #DCDFE6;
    overflow: hidden;
  }
</style>
