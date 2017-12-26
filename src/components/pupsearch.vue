<template>
  <div class="pup-search">
  <ul :span="24" style="padding-left: 25px;">
    <li class="search-item" v-for="(item, index) in searchList">
      <span class="num">{{item.num}}</span>
      <a @click="del(item)">{{item.name | sub }} </a>
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
      api.showSearchList()
        .then(res => {
          this.searchList = res
        })
    },
    computed: {
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      del (item) {
        alert('delect ?')
        let index = this.searchList.indexOf(item)
        this.searchList.splice(index, 1)
      }
    },
    mounted () {
    },
    /*  局部过滤器  */
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
  .reg .el-button {
    width: 200px;
  }
  .pup-search{
    width: 100%;
    height: 210px;
    background: #f6f5ee;
    margin-top: -3px;
  }
  .reg a {
    color: orange;
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
</style>

