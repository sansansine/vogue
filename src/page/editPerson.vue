<template>
  <div class="edit">
  <el-row class="tac">
    <el-col :span="3">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1"><i class="icon1"></i>家常菜</el-menu-item>
        <el-menu-item index="2"><i class="icon2"></i>快手菜</el-menu-item>
        <el-menu-item index="3"><i class="icon3"></i>下饭菜</el-menu-item>
        <el-menu-item index="4"><i class="icon4"></i>早餐</el-menu-item>
        <el-menu-item index="5"><i class="icon5"></i>午餐</el-menu-item>
        <el-menu-item index="6"><i class="icon4"></i>晚餐</el-menu-item>
        <el-menu-item index="7"><i class="icon1"></i>汤羹</el-menu-item>
        <el-menu-item index="8"><i class="icon2"></i>烘焙</el-menu-item>
        <el-menu-item index="9"><i class="icon3"></i>面食</el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="20" class="editPerson">
      <!--编辑界面-->
      <h3 class="edit-header">用户信息编辑</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name" required>
          <el-input class="same-width" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker class="same-width" type="date" placeholder="请选择生日日期" v-model="ruleForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input class="same-width" v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="region">
          <el-select class="select-width" v-model="ruleForm.province" placeholder="-- 请选择省 --" @change="getCity(ruleForm.province)">
            <el-option :label="item.name" :value="item.name" v-for="item in provincelist"></el-option>
          </el-select>
          <el-select class="select-width" v-model="ruleForm.city" placeholder="-- 请选择市 --" @change="getCounty(ruleForm.province,ruleForm.city)">
            <el-option :label="item.name" :value="item.name" v-for="item in citylist"></el-option>
          </el-select>
          <el-select class="select-width" v-model="ruleForm.county" placeholder="-- 请选择县 --">
            <el-option :label="item" :value="item" v-for="item in countylist"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-form-item prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男" value="M"></el-radio>
              <el-radio label="女" value="F"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form-item>
        <el-form-item label="标签" prop="label">
          <el-checkbox-group v-model="ruleForm.label">
            <el-checkbox label="烘焙"></el-checkbox>
            <el-checkbox label="素食"></el-checkbox>
            <el-checkbox label="汤羹" ></el-checkbox>
            <el-checkbox label="早餐"></el-checkbox>
            <el-checkbox label="午餐"></el-checkbox>
            <el-checkbox label="晚餐"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input class="remark-width" type="textarea" v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  import api from '../fetch/axios.js'
  export default {
    data () {
      /*  手机号验证  */
      var phoneVal = (rule, value, callback) => {
        var reg = /^1[345678]\d{9}$/
        if (!reg.test(value)) {
          return callback(new Error('手机号错误'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          name: '',
          birth: '2017.09.12',
          phone: '',
          province: '',
          city: '',
          county: '',
          sex: '女',
          label: ['早餐', '烘焙'],
          remark: ''
        },
        provincelist: [],
        citylist: [],
        countylist: [],
        rules: {
          name: [
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: phoneVal, trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      var user = sessionStorage.getItem('user')
      if (user) {
        user = JSON.parse(user)
        this.name = user.name || ''
        console.log(user.name)
        let params = {'name': this.name}
        console.log(params)
        api.getPersonInfo(params).then(res => {
          console.log(res[0])
          this.ruleForm = res[0]
        })
      }
      this.ruleForm = user
      console.log('username:' + JSON.stringify(this.ruleForm))
      api.showProvinceList().then(res => {
        this.provincelist = res
        console.log(res)
      })
    },
    methods: {
      submitForm (formName) {
        let params = this.ruleForm
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.submitEditPerson(params).then(res => {
              console.log('res' + res)
              if (res) {
                this.$message({
                  type: 'success',
                  message: '修改成功'
                })
              } else {
                this.$message({
                  type: 'info',
                  message: '修改失败'
                })
              }
            })
          } else {
            this.$message({
              type: 'info',
              message: '修改失败'
            })
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      getCity (province) {
        console.log(province)
        let param = {'province': province}
        api.showCityList(param).then(res => {
          console.log(res)
          this.citylist = res
        })
      },
      getCounty (province, city) {
        console.log(city)
        let param = {
          'province': province,
          'city': city}
        api.showCountyList(param).then(res => {
          console.log(res)
          this.countylist = res
        })
      }
    }
  }
</script>

<style scoped>
.edit,.tac{
  height:100%;
}
main .el-menu {
  margin-left: 60px;
  margin-top: 20px;
}
.editPerson{
  padding-left: 20px;
}
.edit-header{
  width: 590px;
  margin-left: 60px;
  color: orange;
  border-bottom: 1px solid orange;
  font-weight: 200;
}
.demo-ruleForm{
  width: 800px;
  margin-left: 100px;
}
</style>
