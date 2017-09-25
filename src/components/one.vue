<template>
  <div class="one">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1"><i class="icon1"></i>家常菜</el-menu-item>
          <el-menu-item index="2"><i class="icon2"></i>快手菜</el-menu-item>
          <el-menu-item index="3"><i class="icon3"></i>下饭菜</el-menu-item>
          <el-menu-item index="4"><i class="icon4"></i>早餐</el-menu-item>
          <el-menu-item index="5"><i class="icon5"></i>午餐</el-menu-item>
          <el-menu-item index="6"><i class="icon4"></i>晚餐</el-menu-item>
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
          <el-col>
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;最新菜谱</span>
            <span class="title-page">
              <a><i class="el-icon-arrow-left"></i></a>&nbsp;&nbsp;&nbsp;
              <a><i class="el-icon-arrow-right"></i></a>&nbsp;&nbsp;&nbsp;
            </span>
          </el-col>
          <el-col :span="7" style="margin: 10px 2% 10px 2%;" v-for="(item, index) in foodList" >
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="item.img" class="image">
              <div style="padding: 10px;color:rgb(106, 98, 72);">
                <div style="width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:keep-all;">{{item.title}}</div>
                <a class="card-bottom"><i class="el-icon-more"></i></a>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;你问我答</span>
            <span class="title-page">
                <a> 更多 </a>&nbsp;&nbsp;&nbsp;
              </span>
          </el-col>
        </el-row>
        <el-card id="questions" class="box-card">
          <div v-for="item in questList" class="text item">
            <i class="el-icon-caret-right"></i>
            <a>{{item.question}}</a>
            <span>{{item.joins}}&nbsp;<i class="el-icon-star-on"></i></span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <div class="reg">
          <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>QQ登录</el-button>
          <br/><br/>
          <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>微博登录</el-button>
          <br/><br/>
          <a v-link="{ path: '/'}">手机/邮箱登录</a>&nbsp;&nbsp;<span style="color:rgba(61, 53, 31, 0.48);">|</span>&nbsp;&nbsp;<a
          href="#">注册</a>
        </div>
        <el-row style="margin-top:20px;">
          <el-col style="margin-bottom: 20px;">
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;热门搜索</span>
            <span class="title-page">
              <a>更多</a>
            </span>
          </el-col>
          <ul :span="24" v-for="(item, index) in searchList" >
              <li class="search-item">
                <span class="num">{{item.num}}</span>
                <a>{{item.name}}</a>
                <span v-bind:class="item.status">&nbsp;&nbsp;&nbsp;</span>
              </li>
          </ul>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <span class="foodlist-title">&nbsp;&nbsp;&nbsp;流行菜谱</span>
            <span class="title-page">
              <a>更多</a>
            </span>
          </el-col>
          <el-col :span="24" v-for="(item, index) in foodPopList" >
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="item.img" class="image">
              <div style="padding: 10px;color:rgb(106, 98, 72);">
                <span>{{item.title}}</span>
                <a class="card-bottom"><i class="el-icon-more"></i></a>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <p>唯有美食与你不可辜负</p>
      </el-col>
      <el-col :span="6">
        <i class="doc-icon-github elementdoc"></i>
        <i class="doc-icon-weibo elementdoc"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import api from '../fetch/axios.js'

  export default {
    name: 'one',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        questList: [],
        foodList: [],
        foodPopList: [],
        searchList: [],
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
    created () {
      this.getData()
    },
    computed: {
      getData () {
        console.log('777777777')
        api.showFoodList()
          .then(res => {
            this.foodList = res
          })
        api.showQuestList()
          .then(res => {
            this.questList = res
          })
        api.showFoodPopList()
          .then(res => {
            this.foodPopList = res
          })
        api.showSearchList()
          .then(res => {
            this.searchList = res
          })
      },
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
    background-image: url('../assets/imgs/iconyu.png');
  }

  .icon2 {
    background-image: url('../assets/imgs/icon1.png');
  }

  .icon3 {
    background-image: url('../assets/imgs/icon2.png');
  }

  .icon4 {
    background-image: url('../assets/imgs/icon3.png');
  }

  .icon5 {
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

  .index_img {
    width: 100%;
    height: 225px;
  }
  #questions{
    color: #666;
    border: none;
    box-shadow: none;
    margin-top: 0;
  }
  #questions div{ padding: 5px 0;}
  #questions span{
    float: right;
  }
  .el-icon-star-on,.el-icon-caret-right{ color: orange;}
  .foodlist-title{ color: orange;font-size: 20px;}
  .title-page{ float: right; color: orange;}
  .card-bottom{
    margin-top: -15px;
    color: orange;
    float: right;
  }
</style>
