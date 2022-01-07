<template>
  <el-container>
    <el-header v-if="show" class="header-box">
      <Header></Header>
    </el-header>
    <el-main class="main-box" :style="{ height: h + 'px' }">
      <el-row justify="center">
        <el-col :span="12">
          <div class="list-title">比赛</div>
        </el-col>
      </el-row>
      <div v-infinite-scroll="load" class="scroll-box" :style="{ height: '100%' }" infinite-scroll-distance="100px">
        <n-thing v-for="item in pages" :key="item" content-indented>
          <template #avatar>
            <el-avatar shape="square" :size="50" src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png
            />
          </template>
          <template #header>
            <!-- <el-skeleton v-if="isPages" :rows="0" animated /> -->
            {{ item.title }}
          </template>
          <template #header-extra>
            <el-button circle size="small">
              <router-link :to="{ name: 'Details', params: { id: '123456789' } }">
                <el-icon>
                  <more></more>
                </el-icon>
              </router-link>
            </el-button>
          </template>
          <!-- <el-skeleton v-if="isPages" :rows="1" animated /> -->
          {{ item.tips }}
        </n-thing>
        <div v-loading="loading" class="load"></div>
      </div>
    </el-main>
    <!-- <el-footer>
      <Footer></Footer>
    </el-footer> -->
  </el-container>
</template>
<script setup>
import Header from '@/views/home/components/header.vue';
import { NThing } from 'naive-ui';
import { More } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('%c 🥖 router: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', route.params.id);
import { GetList } from '@/api/home';

// 获取文章列表
const pages = ref([]);
async function getlist(num) {
  const res = await GetList(num);
  console.log('%c 🥝 res: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', res);
  pages.value.push(...res.data);
}
getlist(10);
// 当用户滚动到最下面时候，进行加载
let loading = ref(true);
const load = () => {
  setTimeout(() => {
    loading.value = true;
  }, 2000);
  console.log('%c 🍪 loading.value: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', loading.value);
  getlist(2);
  loading.value = false;
};
// 获取屏幕高度，处理无限滚动bug
const scroll_height = document.documentElement.clientHeight;
let h = ref(scroll_height - 70);
let show = ref(true);
if (document.documentElement.clientWidth <= 768) {
  h.value = scroll_height;
  show.value = false;
}
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
}
.el-footer {
  padding: 0;
  margin: 0;
  margin-top: 50px;
}
.scroll-box {
  width: 70%;
  padding: 0;
  margin: 0 auto;
  list-style: none;
}
.n-thing {
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 20px;
  margin-top: 10px;
  margin-right: 15px;
}
.list-title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
.load {
  width: 100%;
  height: 300px;
}
@media screen and (max-width: 768px) {
  .scroll-box {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    list-style: none;
  }
}
</style>
