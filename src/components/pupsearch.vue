<template>
  <div>
  <ul :span="24" v-for="(item, index) in searchList" >
    <li class="search-item">
      <span class="num">{{item.num}}</span>
      <a style="font-weight: 200;">{{item.name | sub }} </a>
      <span v-bind:class="item.status">&nbsp;&nbsp;&nbsp;</span>
    </li>
  </ul>
  </div>
</template>

<script>
  import api from '../fetch/axios.js'

  export default {
    name: 'one',
    data () {
      return {
        searchList: []
      }
    },
    created () {
      this.getData()
    },
    computed: {
      getData () {
        console.log('777777777')
        api.showSearchList()
          .then(res => {
            this.searchList = res
          })
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      }
    },
    mounted () {
    },
    filters: {
      sub: function (value, sub) {
        return value.substr(0, 3)
      }
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
    font-weight: 200;
  }
  #questions a{
    color: #222;
  }
  .el-icon-star-on,.el-icon-caret-right{ color: orange;}
</style>

