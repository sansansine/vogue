<template>
  <div class="two">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1"><i class="icon1"></i>家常菜</el-menu-item>
          <el-menu-item index="2"><i class="icon2"></i>快手菜</el-menu-item>
          <el-menu-item index="3"><i class="icon3"></i>下饭菜</el-menu-item>
          <el-menu-item index="4"><i class="icon4"></i>早餐</el-menu-item>
          <el-menu-item index="5"><i class="icon5"></i>午餐</el-menu-item>
          <el-menu-item index="6"><i class="icon4"></i>晚餐</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="13">
        <swiper :options="swiperOption"  ref="mySwiper">
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="item in items">
              <img :src="item" class="index_img">
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'如何在最短的时间里做出又美又好吃的食物，技巧 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <div class="login">
          <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>QQ登录</el-button><br/><br/>
          <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>微博登录</el-button><br/><br/>
          <a href="#">手机/邮箱登录</a>&nbsp;&nbsp;<span style="color:rgba(61, 53, 31, 0.48);">|</span>&nbsp;&nbsp;<a href="#">注册</a>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<style>
.login{
  background: rgb(246, 245, 238);
  height: 180px;
  width: 300px;
  float: right;
  text-align: center;
  padding-top: 45px;
}
.login .el-button{
  width: 200px;
}
.login a{
  color: orange;
}
.icon1,.icon2,.icon3,.icon4,.icon5{
  display: inline-block;
  vertical-align: middle;
  background: none no-repeat 0;
  background-size:cover;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.icon1{
  background-image: url('../assets/imgs/iconyu.png');
}
.icon2{
  background-image: url('../assets/imgs/icon1.png');
}
.icon3{
  background-image: url('../assets/imgs/icon2.png');
}
.icon4{
  background-image: url('../assets/imgs/icon3.png');
}
.icon5{
  background-image: url('../assets/imgs/icon4.png');
}
.el-col-offset-1 {
  margin-left: 6.16667%;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin-top: 10px;
  }
  .index_img{
    width: 100%;
    height: 225px;
  }
</style>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'two',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      currentDate: new Date(),
      items: ['../static/banner1.jpg', '../static/banner2.jpg', '../static/banner3.jpg'],
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>
