<template>
    <div>
      <header class="header">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <img class="img-text" src="../assets/imgs/logo6.png">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">
                <router-link :to="{ name: 'index', params: {} }">网站首页</router-link></el-menu-item>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link :to="{ name: 'two', params: {} }">菜谱分类</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link :to="{ name: 'activePublic', params: {} }">厨房问答</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link :to="{ name: 'activePublic', params: {} }">排行榜</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link :to="{ name: 'activePublic', params: {} }">美食推荐</router-link>
              </el-menu-item>
              <el-menu-item index="6" class="search">
                <el-input placeholder="请输入搜索关键词" icon="search"></el-input>
              </el-menu-item>
              <el-menu-item index="6" style="padding:0;" class="logout">
                <el-dropdown>
                    <span class="el-dropdown-link">
                      <img class="img-icon" src="../assets/imgs/icon01.png">
                    </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>
                      <router-link :to="{ name: 'editPerson', params: {} }">
                        编辑资料
                      </router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </header>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../vuex/modules/user'
  export default {
    data () {
      return {}
    },
    methods: {
      ...mapActions([USER_SIGNOUT]),
      logout: function () {
        this.USER_SIGNOUT()
        this.$router.replace('/')
        //      sessionStorage.removeItem('user')
        //      this.$router.push('/')
        this.$message({
          type: 'success',
          message: '登出成功'
        })
      }
    }
  }
</script>
<style scoped>
  /* 头部导航 */
  .bg-purple-dark {
    background:#000000;
    height: 120px;
    background: url('../assets/imgs/banner1.jpg') center center no-repeat;
    background-size: cover;
  }
  .img-text {
    float: left;
    margin-top: 20px;
    margin-left: 70px;
  }
  .img-icon{
    height:60px;
    width:60px;
    /*float:right;
    margin-right: 40px;*/
  }
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 40px!important;}
  header a{text-decoration: none;font-size: 16px;}
  .el-menu-item{padding: 0 50px;}
</style>
