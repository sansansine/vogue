<template>
  <div class="food_new" style="margin-left: -10px;">
    <el-col :span="3" style="margin: 10px 2% 10px 2%;" v-for="(item, index) in foodNewList" >
      <el-card :body-style="{ padding: '0px'}">
        <img v-bind:src="item.img" class="image">
        <div style="padding: 10px;color:rgb(106, 98, 72);">
          <div style="text-align: center;font-weight:200;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:keep-all;">{{item.title}}</div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>
<script>
  import api from '../fetch/axios.js'

  export default {
    name: 'one',
    data () {
      return {
        foodNewList: []
      }
    },
    created () {
      this.getData()
    },
    computed: {
      getData () {
        console.log('777777777')
        api.showFoodNewList()
          .then(res => {
            this.foodNewList = res
          })
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
<style scoped>
.el-card{
  box-shadow: none;
  border: none;
  width: 60px;
  margin: 0 auto;
}
.el-card__body {
  text-align: center;
}
.el-card__body img{
  margin: 0 auto;
}
</style>
