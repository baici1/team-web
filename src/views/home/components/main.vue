<template>
  <div class="Main">
    <el-row justify="center">
      <el-col :span="12" :xs="22">
        <div class="Main-left">
          <!-- 轮播图 -->
          <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in 5" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          <!-- 公告合集 -->
          <div class="news">
            <el-row justify="space-between" :gutter="20">
              <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>
                          <SvgIcon name="bar-chart-2-line"></SvgIcon>
                          热门文章
                        </span>
                        <!-- <img src="https://static.lanqiao.cn/dasai/images/20210818/title/notice.png" /> -->
                      </div>
                      <div class="nright">
                        <router-link :to="{ name: 'List', params: { id: 'news' } }">
                          <el-button class="button" type="text">查看更多</el-button>
                        </router-link>

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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>
                          <SvgIcon name="message-line"></SvgIcon>
                          新闻动态
                        </span>
                        <!-- <img src="https://static.lanqiao.cn/dasai/images/20210818/title/news.png" /> -->
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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col>

              <!-- <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>日常公告</span>
                        <img src="https://static.lanqiao.cn/dasai/images/20210818/title/notice.png" />
                      </div>
                      <div class="nright">
                        <router-link :to="{ name: 'List', params: { id: 'news' } }">
                          <el-button class="button" type="text">查看更多</el-button>
                        </router-link>

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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>日常公告</span>
                        <img src="https://static.lanqiao.cn/dasai/images/20210818/title/notice.png" />
                      </div>
                      <div class="nright">
                        <router-link :to="{ name: 'List', params: { id: 'news' } }">
                          <el-button class="button" type="text">查看更多</el-button>
                        </router-link>

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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col> -->
            </el-row>
            <el-row justify="space-between" :gutter="20">
              <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>
                          <el-icon :size="20"><data-analysis /></el-icon>
                          通知公告
                        </span>
                        <!-- <img src="https://static.lanqiao.cn/dasai/images/20210818/title/notice.png" /> -->
                      </div>
                      <div class="nright">
                        <router-link :to="{ name: 'List', params: { id: 'news' } }">
                          <el-button class="button" type="text">查看更多</el-button>
                        </router-link>

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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-card class="news-card">
                  <template #header>
                    <div class="news-header">
                      <div class="nleft">
                        <span>
                          <el-icon :size="20"><goods /></el-icon>
                          政策文件
                        </span>
                        <!-- <img src="https://static.lanqiao.cn/dasai/images/20210818/title/news.png" /> -->
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
                      <span style="color: #999999" class="news-time">{{ item.time }}</span>
                    </el-link>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="3" :xs="0">
        <div class="main-right">
          <el-scrollbar>
            <div class="title">比赛时间轴</div>
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </el-scrollbar>
        </div>
      </el-col>
    </el-row>
    <div class="Part">
      <div class="title">优秀教师</div>
      <el-row justify="center">
        <el-col :xl="16" :lg="16" :md="16" :xs="24"><teacher></teacher></el-col>
      </el-row>
    </div>
    <div class="Part">
      <div class="title">优秀团队</div>
      <el-row justify="center">
        <el-col :xl="16" :lg="16" :md="16" :xs="24"><teacher></teacher></el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { GetNews } from '@/api/home';
import { ref } from 'vue';
import { DataAnalysis, Goods } from '@element-plus/icons-vue';
import SvgIcon from '../../../components/SvgIcon/index.vue';
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
// 时间轴
const activities = [
  {
    content: '全国大学生电子商务“创新、创意、创业”挑战赛',
    timestamp: '2018-04-03 20:46',
    color: '#C25E67',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#C25E67',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#C25E67',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#C25E67',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#4336CF',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#4336CF',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#4336CF',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#4336CF',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#4336CF',
  },
];
</script>
<style lang="scss" scoped>
.carousel__item {
  min-height: 300px;
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
.el-row {
  margin-bottom: 20px;
}
.main-right {
  .title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
  }
  .time-line {
    padding-left: 50px;
  }
}
.Part {
  overflow: hidden;
  padding: 30px 10px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  color: rgba($color: #32bdfe, $alpha: 1);
  font-size: 28px;
}
</style>
