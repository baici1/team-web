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
    <!-- 数值显示 -->
    <div class="title">获奖总成绩成绩</div>
    <el-row justify="center">
      <el-col :xl="3" :xs="20">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>特等奖</span>
            </div>
          </template>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
        </el-card>
      </el-col>
      <el-col :xl="3" :xs="20">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>国一</span>
            </div>
          </template>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
        </el-card>
      </el-col>
      <el-col :xl="3" :xs="20">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>国二</span>
            </div>
          </template>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
        </el-card>
      </el-col>
      <el-col :xl="3" :xs="20">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>国三</span>
            </div>
          </template>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"></n-number-animation>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { NNumberAnimation } from 'naive-ui';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
const numberAnimationInstRef = ref(null);
numberAnimationInstRef.value?.play();
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
  background: url('http://cxcygl.ctgu.edu.cn/api/uploads/1637748673653.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
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
@media screen and (max-width: 768px) {
  .el-col {
    margin: 10px 10px;
  }
}
</style>
