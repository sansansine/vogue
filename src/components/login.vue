<template>
  <div class="login">
    <el-form  :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" >
      <h3 class="login-head">登录</h3>
      <el-form-item prop="name">
        <el-input  v-model="loginForm.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="loginForm.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="submitForm('loginForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../vuex/modules/user'
import api from '../fetch/axios.js'
export default {
  data () {
    return {
      loginForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          {required: true, message: '用户名必填', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 16, message: '密码在6到16位之间', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('val')
          let opt = this.loginForm
          // this.$store.dispatch('setLoadingState', true)
          api.Login(opt)
              .then(res => {
                // if (data.info === false) {
                //   console.log('fail')
                //   this.$message({
                //     type: 'info',
                //     message: '账号不存在'
                //   })
                //   return
                // }
                if (res) {
                  this.$message({
                    type: 'success',
                    message: '登录成功'
                  })
                  this.USER_SIGNIN(this.loginForm)
                  this.$router.replace('/one')
                } else {
                  // element-ui消息提示
                  this.$message({
                    type: 'info',
                    message: '密码错误！'
                  })
                }
              })
        } else {
          console.log('not val')
          return false
        }
      })
    }
  }
}
</script>

<style>
  .login{
    width: 40%;
    margin: 5% 25% 5% 25%;
    border: 1px solid #f9dba4;
    box-shadow: 0 2px 2px 0 #f3daae;
    padding: 0 60px 20px 60px;
  }
  .login-head{
    margin: 30px 0px 20px 0px;
    text-align: center;
    background: orange;
    padding: 8px 15px;
    color: #fff;
  }
  .login-btn{
    width: 120px;
    margin-left: 165px;
    padding: 8px 15px;
    border-radius: 0;
  }
  .el-form-item__content {
    margin-left: 0 !important;
}
</style>
