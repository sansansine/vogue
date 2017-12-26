<template>
  <div class="food_new" style="margin-left: -10px;">
    <el-col :span="3" style="margin: 10px 1.5% 10px 1.5%;" v-for="item in foodNewList" >
      <el-card :body-style="{ padding: '0px'}">
        <img v-bind:src="item.img" class="image">
        <div style="padding: 10px;color:rgb(106, 98, 72);">
          <div style="text-align: center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:keep-all;">{{item.title}}</div>
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
      api.showFoodNewList()
        .then(res => {
          this.foodNewList = res
        })
    },
    computed: {
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
