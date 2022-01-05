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
            <el-empty v-if="show" description="No Data"></el-empty>
            <div v-for="item in news" :key="item" class="news-text">
              <el-link>
                <span>{{ item.title }}</span>
              </el-link>
              <el-link>
                <span style="color: #999999">{{ item.time }}</span>
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
            <el-empty v-if="show" description="No Data"></el-empty>
            <div v-for="item in news" :key="item" class="news-text">
              <el-link>
                <span>{{ item.title }}</span>
              </el-link>
              <el-link>
                <span style="color: #999999">{{ item.time }}</span>
              </el-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 指导文章 -->
    <div class="Part" style="background: rgb(247, 249, 251)">
      <el-row justify="center">
        <el-col :xl="16" :xs="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="蓝桥杯" name="first">
              <el-scrollbar height="400px">
                <n-thing v-for="item in pages" :key="item" content-indented>
                  <template #avatar>
                    <el-avatar shape="square" :size="50"
                    src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png />
                  </template>
                  <template #header>
                    <el-skeleton v-if="isPages" :rows="0" animated />
                    {{ item.title }}
                  </template>
                  <template #header-extra>
                    <el-button circle size="small">
                      <el-icon>
                        <more></more>
                      </el-icon>
                    </el-button>
                  </template>
                  <el-skeleton v-if="isPages" :rows="1" animated />
                  {{ item.tips }}
                </n-thing>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="创新创业" name="second">
              <el-scrollbar height="400px">
                <n-thing v-for="item in pages" :key="item" content-indented>
                  <template #avatar>
                    <el-avatar shape="square" :size="50"
                    src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png />
                  </template>
                  <template #header>{{ item.title }}</template>
                  <template #header-extra>
                    <el-button circle size="small">
                      <el-icon>
                        <more></more>
                      </el-icon>
                    </el-button>
                  </template>
                  {{ item.tips }}
                </n-thing>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="服创" name="third">
              <el-scrollbar height="400px">
                <n-thing v-for="item in pages" :key="item" content-indented>
                  <template #avatar>
                    <el-avatar shape="square" :size="50"
                    src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png />
                  </template>
                  <template #header>{{ item.title }}</template>
                  <template #header-extra>
                    <el-button circle size="small">
                      <el-icon>
                        <more></more>
                      </el-icon>
                    </el-button>
                  </template>
                  {{ item.tips }}
                </n-thing>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="数学建模" name="fourth">
              <el-scrollbar height="400px">
                <n-thing v-for="item in pages" :key="item" content-indented>
                  <template #avatar>
                    <el-avatar shape="square" :size="50"
                    src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png />
                  </template>
                  <template #header>{{ item.title }}</template>
                  <template #header-extra>
                    <el-button circle size="small">
                      <el-icon>
                        <more></more>
                      </el-icon>
                    </el-button>
                  </template>
                  {{ item.tips }}
                </n-thing>
              </el-scrollbar>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>

    <!-- 数值显示 -->
    <div class="Part">
      <div class="title">获奖总成绩成绩</div>
      <el-row justify="center">
        <el-col :xl="3" :xs="20">
          <el-card class="score" shadow="hover">
            <template #header>
              <div>
                <span>特等奖</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="score" shadow="hover">
            <template #header>
              <div>
                <span>国一</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="score" shadow="hover">
            <template #header>
              <div>
                <span>国二</span>
              </div>
            </template>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
          </el-card>
        </el-col>
        <el-col :xl="3" :xs="20">
          <el-card class="score" shadow="hover">
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
    <div class="Part">
      <div class="title">优秀教师</div>
      <el-row justify="center">
        <el-col :xl="16" :xs="24"><teacher></teacher></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { More } from '@element-plus/icons-vue';
import Teacher from '@/components/teacher/index.vue';
import { NNumberAnimation, NThing } from 'naive-ui';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { GetNews, GetPages } from '@/api/home';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';

const numberAnimationInstRef = ref(null);
numberAnimationInstRef.value?.play();

// 公告和新闻显示
const show = ref(true);
let news = ref([]);
let getNews = async () => {
  const { data } = await GetNews();
  console.log('%c 🥑 data: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', data);
  news.value = data;
  show.value = false;
};
getNews();
// 指导文章显示
const activeName = ref('first');
let isPages = ref(true);
let pages = ref([]);
// 显示默认文章
async function getPages(name) {
  const res = await GetPages({ name: `${name}` });
  pages.value = res.data;
  isPages.value = false;
}
getPages('first');

// 标签页发起请求
const handleClick = (tab, event) => {
  isPages.value = true;
  console.log('%c 🥪 event: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', tab.paneName);
  getPages(tab.paneName);
  isPages.value = false;
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
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

.score {
  text-align: center;
  font-size: 30px;
  span {
    font-size: 28px;
  }
}
.el-col {
  margin: 0 10px;
}

.title {
  text-align: center;
  margin-bottom: 50px;
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
  .el-link {
    margin: 5px 0;
    cursor: pointer;
  }
}

.Part {
  overflow: hidden;
  padding: 30px 0;
  margin: 50px 0;
}
.n-thing {
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 20px;
  margin-top: 10px;
  margin-right: 15px;
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
