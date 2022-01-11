<template>
  <el-container>
    <el-header class="header-box">
      <Header></Header>
    </el-header>
    <el-main class="main-box">
      <el-row justify="center">
        <el-col :span="16" :xs="22">
          <div class="title">
            <div class="title1">关于公示2021年秋季学期教授为本科生上课信息的通知</div>
            <div class="title1">教通字〔2022〕3号</div>
            <div class="mark">
              <span>作者:杨澳宇</span>
              <span>时间:2022-01-05 15:58 </span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="16" :xs="22">
          <div class="main-text">
            <div>
              各学院： 为落实教授为本科生上课制度，现将公示教授为本科生上课信息的有关事项通知如下：
              1.本通知中的“教授”是指具有正教授职称的教师（含挂靠教师）；
              2.本通知中的“课程”是指面向本科生开设的所有理论课和实验课，不含毕业设计（论文）、实习等；
              3.各学院于1月12日之前在学院网站主页公示本学院当学期教授上课基本信息表（见附件），并将公示网址发送至教务处教学质量管理科。
              5.
              要求所公示的教授上课学时数为实际上课的学时数，教授为本科生上课基本信息作为教授年度考核和学院教学工作状态考核的依据。
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>
<script setup>
import Header from '@/views/home/components/header.vue';
import Footer from '@/views/home/components/footer.vue';
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
.title {
  margin: 60px 0;
  text-align: center;
  border-bottom: 2px solid #e1e1e1;
  .title1 {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 5px;
  }
  .mark {
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: #999;
    margin: 10px 0;
    span {
      margin: 0 20px;
    }
  }
}
.main-text {
  min-height: 500px;
  padding: 0 20px;
}
@media screen and (max-width: 768px) {
}
</style>
