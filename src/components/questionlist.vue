<template>
  <div class="question">
    <el-card :body-style="{ padding: '12px' }" id="questions" class="box-card">
      <div v-for="item in questList" class="text item">
        <a>{{item.question}}</a>
        <span>{{item.joins}}&nbsp;参与</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  import api from '../fetch/axios.js'

  export default {
    name: 'one',
    data () {
      return {
        questList: []
      }
    },
    created () {
      api.showQuestList()
        .then(res => {
          this.questList = res
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
  body{ color: #666; }
  .right-split {
    margin-right: 37px;
  }
  .el-col{
    margin-top: 10px;
  }
  .reg {
    background: rgb(246, 245, 238);
    height: 180px;
    width: 100%;
    float: right;
    text-align: center;
    padding-top: 45px;
  }

  .reg .el-button {
    width: 200px;
  }

  .reg a {
    color: orange;
  }

  .text {
    font-size: 16px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin-top: 10px;
  }
  #questions{
    color: #666;
    border: none;
    box-shadow: none;
    margin-top: 0;
  }
  #questions div{ padding: 10px 0;}
  #questions span{
    float: right;
    color: #909090;
    font-size: 14px;
  }
  #questions a{
    color: #222;
  }
  .el-icon-star-on,.el-icon-caret-right{ color: orange;}
</style>

