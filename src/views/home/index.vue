<template>
  <el-container>
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-main class="main-box">
      <Main></Main>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>
<script setup>
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';
</script>
<style lang="scss" scoped>
// 支持CSS变量注入v-bind(color)

.header-box {
  width: 100%;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.main-box {
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
}
.el-footer {
  padding: 0;
  margin: 0;
  margin-top: 50px;
}
@media screen and (max-width: 768px) {
}
</style>
