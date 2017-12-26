<template>
  <div class="one">
    <el-row class="tac" style="padding: 10px 70px;">
      <el-col :span="3">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1"><i class="icon1"></i>家常菜</el-menu-item>
          <el-menu-item index="2"><i class="icon2"></i>快手菜</el-menu-item>
          <el-menu-item index="3"><i class="icon3"></i>下饭菜</el-menu-item>
          <el-menu-item index="4"><i class="icon4"></i>早餐</el-menu-item>
          <el-menu-item index="5"><i class="icon5"></i>午餐</el-menu-item>
          <el-menu-item index="6"><i class="icon4"></i>晚餐</el-menu-item>
          <el-menu-item index="7"><i class="icon1"></i>汤羹</el-menu-item>
          <el-menu-item index="8"><i class="icon2"></i>烘焙</el-menu-item>
          <el-menu-item index="9"><i class="icon3"></i>面食</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="15">
        <swiper :options="swiperOption" ref="mySwiper" style="margin: 0 2%;">
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="item in items">
            <img :src="item" class="index_img">
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <el-row style="margin-top:20px;">
          <el-col class="list-head">
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;最新菜谱</span>
            <span class="title-page">
              <a><i class="el-icon-arrow-left"></i></a>&nbsp;&nbsp;&nbsp;
              <a><i class="el-icon-arrow-right"></i></a>&nbsp;&nbsp;&nbsp;
            </span>
          </el-col>
          <menu_pop></menu_pop>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col class="list-head">
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;你问我答</span>
            <span class="title-page">
                <a> 更多 </a>&nbsp;&nbsp;&nbsp;
              </span>
          </el-col>
        </el-row>
        <question_list></question_list>
        <el-row>
          <el-col class="list-head">
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;时令食材</span>
            <span class="title-page">
              <a>更多</a>&nbsp;&nbsp;&nbsp;
            </span>
          </el-col>
          <new_food></new_food>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <div class="reg">
            <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>QQ登录</el-button>
            <br/><br/>
            <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>微博登录</el-button>
            <br/><br/>
            <a>手机/邮箱登录</a>&nbsp;&nbsp;<span style="color:rgba(61, 53, 31, 0.48);">|</span>&nbsp;&nbsp;<a
            href="#">注册</a>
          </div>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col class="list-head">
            <span>&nbsp;&nbsp;&nbsp;热门搜索</span>
            <span class="title-page">
              <a>更多</a>
            </span>
            <pup_search></pup_search>
          </el-col>
        </el-row>
          <el-row style="margin-top:20px;">
          <el-col class="list-head">
            <span>&nbsp;&nbsp;流行菜谱</span>
            <span class="title-page">
              <a>更多</a>
            </span>
          </el-col>
            <pop_food></pop_food>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="text-align: center;margin-top: 20px;background: rgb(243, 243, 243);">
      <p><i class="el-icon-share"></i>&nbsp;唯有美食与你不可辜负</p>
    </el-row>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import menupop from '../components/popmenu.vue'
  import questionlist from '../components/questionlist.vue'
  import newfood from '../components/newfood.vue'

  export default {
    name: 'one',
    components: {
      swiper,
      swiperSlide,
      menupop,
      questionlist,
      newfood
    },
    data () {
      return {
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
  body{ color: #666;}
  .list-head{
    font-size: 16px;
    color: orange;

  }
  .el-menu li {
     font-size: 15px;
  }
  main .main-right{
    padding: 0;
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
  .el-col-offset-1 {
    margin-left: 6.16667%;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .index_img {
    width: 100%;
    height: 225px;
  }
  .title-page{ float: right; color: orange;font-size: 14px;}
</style>
