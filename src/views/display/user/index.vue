<template>
  <el-container>
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-main>
      <!-- 第一部分：头像与基本信息介绍 -->
      <el-row justify="center">
        <el-col :span="15" :xs="24">
          <el-descriptions class="margin-top" title="个人简介" border>
            <el-descriptions-item min-width="80px">
              <template #label>
                <div>
                  <el-icon>
                    <user />
                  </el-icon>
                  头像
                </div>
              </template>
              <el-avatar
                shape="square"
                :size="40"
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              ></el-avatar>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <user />
                  </el-icon>
                  姓名
                </div>
              </template>
              kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <iphone />
                  </el-icon>
                  性别
                </div>
              </template>
              男
            </el-descriptions-item>
            <el-descriptions-item :span="2">
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Location />
                  </el-icon>
                  邮箱
                </div>
              </template>
              249337001@qq.com
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <tickets />
                  </el-icon>
                  身份
                </div>
              </template>
              <el-tag size="small">学生</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <office-building />
                  </el-icon>
                  描述
                </div>
              </template>
              No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province No.1188, Wuzhong Avenue, Wuzhong
              District, Suzhou, Jiangsu Province No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
              No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
            </el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
      <!-- 第二部分：获奖显示 -->
      <el-row justify="center" :gutter="20">
        <el-col :span="5" :xs="20">
          <el-card shadow="always">
            <div class="award">
              <SvgIcon name="undraw_outer_space_re_u9vd" class="award-svg"></SvgIcon>
              <div class="award-text">
                <div class="award-text-title">校赛</div>
                <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" :xs="20">
          <el-card shadow="always">
            <div class="award">
              <SvgIcon name="undraw_happy_news_re_tsbd" class="award-svg"></SvgIcon>
              <div class="award-text">
                <div class="award-text-title">省赛</div>
                <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" :xs="20">
          <el-card shadow="always">
            <div class="award">
              <SvgIcon name="undraw_connection_re_lcud" class="award-svg"></SvgIcon>
              <div class="award-text">
                <div class="award-text-title">国赛</div>
                <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 第三部分：饼图显示 -->
      <el-row justify="center" style="margin: 0">
        <el-col :span="15">
          <h3 style="font-weight: 700">成绩图表显示</h3>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="8"><chart></chart> </el-col>
        <el-col :span="8"><chart></chart> </el-col>
      </el-row>
      <!-- 第四部分：历史赛事记录 -->
      <el-row justify="center" style="margin: 0">
        <el-col :span="15">
          <h3 style="font-weight: 700">历史赛事记录</h3>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="15" :xs="22">
          <a-list item-layout="vertical" :data-source="activities" :loading="loading" class="game-list">
            <template #loadMore>
              <div v-if="isMore" :style="{ textAlign: 'center', margin: '12px 0', height: '32px', lineHeight: '32px' }">
                <a-spin v-if="loadingMore" />
                <a-button v-else @click="loadMore">加载更多</a-button>
              </div>
            </template>
            <template #renderItem="{ item }">
              <el-card class="game-card">
                <a-list-item>
                  <a-list-item-meta>
                    <template #title>
                      <a href="https://www.antdv.com/" class="game-item-title">
                        {{ item.c_name }}
                        <!-- <el-tag type="success" size="small" style="margin-left: 5px">{{
                          Comstatus[+item.status]
                        }}</el-tag> -->
                        <el-tag type="info" size="small" style="margin-left: 5px">{{ item.c_type }}类赛事</el-tag>
                      </a>
                      <div>
                        <p style="font-size: 14px; color: rgb(102, 102, 102); max-width: 95%">
                          {{ item.introduction }}
                        </p>
                        <p style="margin-top: 6px; font-size: 12px; color: rgb(136, 136, 136)">
                          报名时间： {{ item.start_time }}
                          <el-divider direction="vertical"></el-divider>
                          截止时间：{{ item.end_time }}
                          <el-divider direction="vertical"></el-divider>
                          举办方：{{ item.organizer }}
                        </p>
                      </div>
                    </template>
                    <template #avatar>
                      <a-avatar
                        shape="square"
                        src="https://ali-cdn.educoder.net/images/avatars/Competition/3?t=1591925435"
                        class="game-item-img"
                      />
                    </template>
                  </a-list-item-meta>
                  <template #extra>
                    <!-- <div class="game-extra">
                      <el-button :disabled="item.isdisabled">参与报名</el-button>
                    </div> -->
                    <div class="game-extra">
                      <el-button :disabled="item.isdisabled"
                        ><el-link :href="item.url" target="_blank" :underline="false">前往官网</el-link></el-button
                      >
                    </div>
                  </template>
                </a-list-item>
              </el-card>
            </template>
          </a-list>
        </el-col>
      </el-row>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script setup>
import Header from '@/views/home/components/header.vue';
import Footer from '@/views/home/components/footer.vue';
import { User, Iphone, Location, Tickets, OfficeBuilding } from '@element-plus/icons-vue';
import SvgIcon from '../../../components/SvgIcon/index.vue';
import { NNumberAnimation } from 'naive-ui';
import { ref } from 'vue';
import { GetCompetitions } from '@/api/page';
import { ElMessage } from 'element-plus';
import chart from './components/chart.vue';
// 获取文章列表
const comParams = ref({
  page: 1,
  limit: 1,
  status: '',
  search: '',
});

const activities = ref([]);
const loading = ref(false);
const isMore = ref(true);
let getcompetition = async () => {
  try {
    isMore.value = true;
    loading.value = true;
    const { data } = await GetCompetitions(comParams.value);
    console.log('%c 🌮 data: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', data);
    activities.value.push(...data.records);
    // 判断是否需要继续加载
    if (activities.value.length >= data.total) {
      isMore.value = false;
    }
  } catch ({ response }) {
    ElMessage.error(response.data.msg);
    activities.value = [];
    isMore.value = false;
  } finally {
    loading.value = false;
  }
};
getcompetition();
// 获取更多
const loadingMore = ref(false);
let loadMore = () => {
  loadingMore.value = true;
  comParams.value.page += 1;
  getcompetition();
  loadingMore.value = false;
};
</script>

<style lang="scss" scoped>
.user-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-box {
  width: 100%;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.el-footer {
  padding: 0;
  margin: 0;
}
.el-descriptions__label {
  max-width: 100px;
}
.el-row {
  margin-bottom: 20px;
}
.award {
  zoom: 1;
  height: 200px;
  position: relative;
  background: url('http://yiming_chang.gitee.io/manages/assets/bg.7b14eacd.png');
  background-size: cover;
  .award-svg {
    position: absolute;
    left: 5%;
    top: 20%;
    width: 150px;
    height: 150px;
  }
  .award-text {
    position: absolute;
    right: 10%;
    top: 10%;
    font-size: 30px;
    .award-text-title {
      margin-bottom: 10px;
      font-weight: bolder;
    }
  }
}
.game-list {
  margin-top: 20px;
  min-height: 400px;
  .game-card {
    margin: 20px 0;
    border-radius: 5px;
    .el-card__body {
      padding: 0;
    }
    .game-item-title {
      font-size: 20px;
      color: #05101a;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 80%;
    }
    .game-item-img {
      width: 200px;
      height: 100px;
      border-radius: 5px;
    }
  }
}
.game-extra {
  margin: 10px 0;
}
@media screen and (max-width: 768px) {
  .game-list {
    margin-top: 20px;
    .game-card {
      .game-item-img {
        display: none;
        width: 100px;
        height: 50px;
        border-radius: 5px;
      }
    }
  }
}
</style>
