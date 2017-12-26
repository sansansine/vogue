<template>
  <div id="app">
    <head_menu></head_menu>
    <main>
          <div class="main-right">
            <router-view class="view"></router-view>
          </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
      }
    }
  }
</script>

<style>
    body{margin: 0;}
    #app {
      font-weight: 200;
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    /* 主内容区 */
    main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px; background-color: #FCFCFC;  }
    main .main-left{text-align: center;width: 200px;float: left;}
    main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff;}
    main .el-menu{background-color: transparent!important;}
    .search:hover,.logout:hover{
      text-decoration: none !important;
      border: none !important;
    }
    .el-dropdown-item a{
       color: #666 !important;
       text-decoration: none !important;
    }
    .icon1, .icon2, .icon3, .icon4, .icon5 {
      display: inline-block;
      vertical-align: middle;
      background: none no-repeat 0;
      background-size: cover;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .icon1 {
      background-image: url('./assets/imgs/iconyu.png');
    }

    .icon2 {
      background-image: url('./assets/imgs/icon1.png');
    }

    .icon3 {
      background-image: url('./assets/imgs/icon2.png');
    }

    .icon4 {
      background-image: url('./assets/imgs/icon3.png');
    }

    .icon5 {
      background-image: url('./assets/imgs/icon4.png');
    }
    .same-width{
      width: 450px;
    }
    .select-width{
      width: 150px;
    }
    .remark-width{
      width: 450px;
    }
</style>
