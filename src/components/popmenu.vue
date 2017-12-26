<template>
  <div class="menu_pop">
    <el-col :span="7" style="margin: 10px 2% 10px 2%;" v-for="item in foodList" >
      <el-card :body-style="{ padding: '0px' }">
        <img v-bind:src="item.img" class="image">
        <div style="padding: 10px;color:rgb(106, 98, 72);">
          <div class="card-text" v-text="item.title"></div>
          <a class="card-bottom"><i class="el-icon-more"></i></a>
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
        foodList: []
      }
    },
    created () {
      api.showFoodList()
        .then(res => {
          this.foodList = res
        })
    },
    computed: {
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  @import '../../static/css/style.css';
  .card-text{
    width:150px;
    font-size: 14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-break:keep-all;
  }
  .card-bottom{
    color: orange;
    float: right;
    margin-top: -18px;
  }
  .el-card{
    border: none;
    border-radius: 0;
  }
</style>

