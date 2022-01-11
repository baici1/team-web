<template>
  <div class="pagesList">
    <el-container>
      <el-header class="header-box">
        <Header></Header>
      </el-header>
      <el-main class="main-box">
        <el-row justify="center" :gutter="20">
          <el-col :span="2" :xs="0">
            <el-menu
              :default-active="route.params.position"
              class="menu"
              active-text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="one" class="menu-item">
                <SvgIcon name="bar-chart-2-line"></SvgIcon>
                <span>热门文章</span>
              </el-menu-item>
              <el-menu-item index="two" class="menu-item">
                <SvgIcon name="message-line"></SvgIcon>
                <span>新闻动态</span>
              </el-menu-item>
              <el-menu-item index="three" class="menu-item">
                <el-icon :size="15"><data-analysis /></el-icon>
                <span>通知公告</span>
              </el-menu-item>
              <el-menu-item index="four" class="menu-item">
                <el-icon :size="15"><goods /></el-icon>
                <span>政策文件</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="12" :xs="24">
            <div class="list-box">
              <div class="list-title">
                <el-breadcrumb>
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>热门文章</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <a-list item-layout="horizontal" :data-source="data" class="list">
                <template #renderItem="{ item }">
                  <a-list-item class="list-item">
                    <a-list-item-meta class="list-meta">
                      <template #title>
                        <a href="https://www.antdv.com/">{{ item.title }}</a>
                      </template>
                      <template #avatar>
                        <a-avatar :size="10"> </a-avatar>
                      </template>
                    </a-list-item-meta>
                    <div>{{ item.time }}</div>
                  </a-list-item>
                </template>
              </a-list>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script setup>
import Header from '@/views/home/components/header.vue';
import Footer from '@/views/home/components/footer.vue';
import { useRoute } from 'vue-router';
import { DataAnalysis, Goods } from '@element-plus/icons-vue';

const route = useRoute();
console.log('%c 🥃 route: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', route);
const data = [
  {
    title: 'Ant Design Title 1',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 2',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 3',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 4',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 1',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 2',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 3',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 4',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 1',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 2',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 3',
    time: '2018-04-03 20:46',
  },
  {
    title: 'Ant Design Title 4',
    time: '2018-04-03 20:46',
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
  // background-color: rgb(242, 242, 242);
  .menu {
    border: #f2f2f2 1px solid;
    .is-active {
      background-color: #265db4;
    }
    .menu-item {
      border-bottom: #f2f2f2 1px solid;
    }
  }
}
.el-footer {
  padding: 0;
  margin: 0;
}

.list-box {
  border: #f2f2f2 1px solid;
  border-top: 3px solid #265db4;
  .list-title {
    padding: 5px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: #f2f2f2 1px solid;
  }
  .list-item {
    border-bottom: #f2f2f2 1px solid;
    height: 60px;
    padding: 10px;
    margin: 5px;
  }
  .list-item:last-child {
    border-bottom: none;
  }
}

@media screen and (max-width: 768px) {
}
</style>
