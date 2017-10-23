<template>
    <div class="activePublic ">
      <el-row>
        <h1 class="list-left">美食推荐列表</h1>
        <el-button class="list-right" type="primary" icon="plus" @click="showEditModel">新增</el-button>
      </el-row>
      <el-row>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address"label="地址"></el-table-column>
        </el-table>
      </el-row>

      <!--新增界面-->
      		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
      			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
      				<el-form-item label="姓名" prop="name">
      					<el-input v-model="addForm.name" auto-complete="off"></el-input>
      				</el-form-item>
      				<el-form-item label="性别">
      					<el-radio-group v-model="addForm.sex">
      						<el-radio class="radio" :label="1">男</el-radio>
      						<el-radio class="radio" :label="0">女</el-radio>
      					</el-radio-group>
      				</el-form-item>
      				<el-form-item label="年龄">
      					<el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
      				</el-form-item>
      				<el-form-item label="生日">
      					<el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
      				</el-form-item>
      				<el-form-item label="地址">
      					<el-input type="textarea" v-model="addForm.addr"></el-input>
      				</el-form-item>
      			</el-form>
      			<div slot="footer" class="dialog-footer">
      				<el-button @click.native="addFormVisible = false">取消</el-button>
      				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      			</div>
      		</el-dialog>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        addFormVisible: false,
        addLoading: false,
        addFormRules: {name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]},
        addForm: {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      }
    },
    motheds: {
      showEditModel: function () {
        this.addFormVisible = true
        this.addForm = {name: '', sex: -1, age: 0, birth: '', addr: ''}
      }
    }
  }
</script>

<style scoped>
.list-left{
  float: left;
}
.list-right{
  float: right;
  margin-top: 25px;
}
.el-table th > .cell,.el-table td > .cell {
  text-align: center;
}
</style>
