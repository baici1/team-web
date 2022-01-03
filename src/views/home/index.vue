<template>
  <el-container>
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script setup>
import Header from './components/header.vue';
</script>
<style lang="scss" scoped>
// 支持CSS变量注入v-bind(color)
.el-container {
  height: 100%;
  width: 100%;
}
.header-box {
  width: 100%;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
</style>
