<template>
  <div>
  <el-col :span="23" v-for="(item, index) in foodPopList" style="float: right;">
    <el-card :body-style="{ padding: '0px' }">
      <img v-bind:src="item.img" class="image">
      <div style="padding: 10px;color:rgb(106, 98, 72);">
        <span style="font-weight: 200;">{{item.title}}</span>
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
        foodPopList: []
      }
    },
    created () {
      this.getData()
    },
    computed: {
      getData () {
        console.log('777777777')
        api.showFoodPopList()
          .then(res => {
            this.foodPopList = res
          })
      }
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

</style>
