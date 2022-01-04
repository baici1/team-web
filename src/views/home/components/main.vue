<template>
  <div class="Main">
    <!-- 轮播图 -->
    <el-row justify="center">
      <el-col :xl="24" :xs="24">
        <Carousel :autoplay="2000" :wrap-around="true">
          <Slide v-for="slide in 5" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </el-col>
    </el-row>
    <!-- 公告显示 -->
    <div class="news">
      <el-row justify="center">
        <el-col :xl="8" :xs="20">
          <el-card class="news-card">
            <template #header>
              <div class="news-header">
                <div class="nleft">
                  <span>日常公告</span>
                  <img src="https://static.lanqiao.cn/dasai/images/20210818/title/notice.png" />
                </div>
                <div class="nright">
                  <el-button class="button" type="text">查看更多</el-button>
                  <img src="https://static.lanqiao.cn/dasai/images/20210818/icons/yellow_right.png" alt="icons" />
                </div>
              </div>
            </template>
            <div v-for="item in news" :key="item" class="news-text">
              <el-link>
                <span>{{ item.title }}</span>
              </el-link>
              <el-link>
                <span style="max-width: 50px">{{ item.time }}</span>
              </el-link>
            </div>
          </el-card>
        </el-col>
        <el-col :xl="8" :xs="20">
          <el-card class="news-card">
            <template #header>
              <div class="news-header">
                <div class="nleft">
                  <span>比赛通知</span>
                  <img src="https://static.lanqiao.cn/dasai/images/20210818/title/news.png" />
                </div>
                <div class="nright">
                  <el-button class="button" type="text">查看更多</el-button>
                  <img src="https://static.lanqiao.cn/dasai/images/20210818/icons/yellow_right.png" alt="icons" />
                </div>
              </div>
            </template>
            <div v-for="item in news" :key="item" class="news-text">
              <el-link>
                <span>{{ item.title }}</span>
              </el-link>
              <el-link>
                <span>{{ item.time }}</span>
              </el-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 数值显示 -->
    <div class="Part1">
      <div class="title">获奖总成绩成绩</div>
      <el-row justify="center">
        <el-col :xl="3" :xs="20">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div>
                <span>特等奖</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div>
                <span>国一</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div>
                <span>国二</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div>
                <span>国三</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { NNumberAnimation } from 'naive-ui';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { GetNews } from '@/api/home';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
const numberAnimationInstRef = ref(null);
numberAnimationInstRef.value?.play();

let news = ref([]);
let getNews = async () => {
  const { data } = await GetNews();
  console.log('%c 🥑 data: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', data);
  news.value = data;
};
getNews();
</script>

<style lang="scss" scope>
.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url('http://cxcygl.ctgu.edu.cn/api/uploads/1637748673653.png');
  // background-position: center;
  // background-size: cover;
  // background-repeat: no-repeat;
  // overflow: hidden;
}

.box-card {
  text-align: center;
}
.el-col {
  margin: 0 10px;
}

.title {
  text-align: center;
  margin-bottom: 10px;
  color: rgba($color: #32bdfe, $alpha: 1);
  font-size: 28px;
}
.news {
  margin-bottom: 50px;
}
.el-card__header {
  padding: 0 20px;
}
.news-header {
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  .el-button {
    color: #161f39;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  .el-button:hover {
    color: rgb(100, 42, 251);
  }
  .nleft {
    height: 50px;
    text-align: center;
    display: flex;
    align-content: center;
    align-items: center;
    img {
      height: 17px;
      cursor: pointer;
      margin-left: 10px;
    }
    span {
      font-size: 24px;
      color: #161f39;
    }
  }
  .nright {
    height: 50px;
    text-align: center;
    display: flex;
    align-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 17px;
      cursor: pointer;
    }
  }
}
.news-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin: 5px 0;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .el-col {
    margin: 10px 10px;
  }
  .news-text {
    span {
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
