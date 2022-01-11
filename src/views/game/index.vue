<template>
  <el-container>
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-main class="main-box">
      <el-scrollbar>
        <el-row justify="center">
          <el-col :span="24">
            <Banner></Banner>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-col :span="16" :xs="22">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">Processing Center</el-menu-item>
              <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
            <!-- <n-tabs default-value="signin" size="large">
              <n-tab-pane name="signin" tab="登录">DENGLU </n-tab-pane>
              <n-tab-pane name="signup" tab="注册"> ZHUVC</n-tab-pane>
            </n-tabs> -->
          </el-col>
        </el-row>
        <el-row justify="center" style="background: rgb(242, 242, 242)">
          <el-col :span="14" :xs="22">
            <a-list item-layout="vertical" :data-source="data" class="game-list">
              <template #renderItem="{ item }">
                <el-card class="game-card">
                  <a-list-item>
                    <a-list-item-meta>
                      <template #title>
                        <a href="https://www.antdv.com/" class="game-item-title">
                          {{ item.title }}
                          <el-tag type="success" size="small" style="margin-left: 5px">{{ item.tag }}</el-tag>
                        </a>
                        <div>
                          <p style="font-size: 14px; color: rgb(102, 102, 102); max-width: 95%">
                            {{ item.describe }}
                          </p>
                          <p style="margin-top: 6px; font-size: 12px; color: rgb(136, 136, 136)">
                            报名时间： {{ item.startTime }}
                            <el-divider direction="vertical"></el-divider>
                            截止时间：{{ item.startTime }}
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
                      <div class="game-extra">
                        <el-button :disabled="item.isdisabled">参与报名</el-button>
                      </div>
                    </template>
                  </a-list-item>
                </el-card>
              </template>
            </a-list>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-main>
    <!-- <el-footer>
      <Footer></Footer>
    </el-footer> -->
  </el-container>
</template>
<script setup>
import Header from '@/views/home/components/header.vue';
// import { NTabs, NTabPane } from 'naive-ui';
// import { More } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('%c 🥖 router: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', route.params.id);
import { GetList } from '@/api/home';
import Banner from './components/banner.vue';

// 获取文章列表
const pages = ref([]);
async function getlist(num) {
  const res = await GetList(num);
  console.log('%c 🥝 res: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', res);
  pages.value.push(...res.data);
}
getlist(10);

const activeIndex = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
const data = [
  {
    title: '全国高校绿色计算大赛',
    tag: '正在进行中',
    describe:
      '开源项目创新赛聚焦发起或参与开源项目创新开发，设计了命题组和自由组两个组别，其中命题组为参赛团队参与指定开源项目进行贡献。',
    startTime: '2021-03-31',
    endTime: '2021-11-30 00:00:00',
    isdisabled: true,
  },
  {
    title: '全国高校绿色计算大赛',
    tag: '正在进行中',
    describe:
      '开源项目创新赛聚焦发起或参与开源项目创新开发，设计了命题组和自由组两个组别，其中命题组为参赛团队参与指定开源项目进行贡献。',
    startTime: '2021-03-31',
    endTime: '2021-11-30 00:00:00',
  },
  {
    title: '全国高校绿色计算大赛',
    tag: '正在进行中',
    describe:
      '开源项目创新赛聚焦发起或参与开源项目创新开发，设计了命题组和自由组两个组别，其中命题组为参赛团队参与指定开源项目进行贡献。',
    startTime: '2021-03-31',
    endTime: '2021-11-30 00:00:00',
  },
  {
    title: '全国高校绿色计算大赛',
    tag: '正在进行中',
    describe:
      '开源项目创新赛聚焦发起或参与开源项目创新开发，设计了命题组和自由组两个组别，其中命题组为参赛团队参与指定开源项目进行贡献。',
    startTime: '2021-03-31',
    endTime: '2021-11-30 00:00:00',
  },
];
</script>

<style lang="scss" scoped>
// 支持CSS变量注入v-bind(color)

.header-box {
  width: 100%;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.main-box {
  width: 100%;
  padding: 0;
  //  background-color: rgb(242, 242, 242);
}
.el-footer {
  padding: 0;
  margin: 0;
  margin-top: 50px;
}

.el-menu-demo {
  border: none;
}
.game-list {
  margin-top: 20px;
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
