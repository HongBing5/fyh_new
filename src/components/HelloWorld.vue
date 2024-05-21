<template>
  <el-carousel :interval="carouselInterval" type="card" :height="carouselHeight">
    <el-carousel-item v-for="item in carouselItems" :key="item.id">
      <!-- 产品名称 -->
      <h3 class='medium'>{{ item.name }}</h3>
      <!-- 产品图片 -->
      <img :src="item.imageUrl" :alt="item.name" />
      <img class="bg-img" :src="item.imageUrl" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import lunbotu from '../data/lunbotu.js'

export default {
  data () {
    return {
      // 轮播图图数组数据
      carouselItems: lunbotu,
      carouselHeight: '400px', // 设置轮播图高度
      carouselInterval: 4000 // 设置轮播间隔时间（单位：毫秒）
    }
  }
}
</script>

<style>
.el-carousel {
  margin-top: 100px;
}

.el-carousel__item {
  /* width: 1500px; */
  min-width: 300px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.5;
  line-height: 300px;
  margin-top: 50px;
}
.el-carousel__item:hover h3{
  color: #d9e1ff;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.el-carousel__item img {
  /* 可选：确保图片不超过容器宽度 */
  height: 100%;
  max-width: 100%;
  /* 可选：确保图片不超过容器高度 */
  object-fit: contain;
  /* 根据实际需要调整图片填充方式 */
  /* transform: scale(1.2); */
}

.el-carousel__item .bg-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  /* 图片宽度填充容器 */
  height: 140%;
  /* 图片高度填充容器 */
  object-fit: cover;
  filter: blur(25px);
  /* 添加模糊效果 */
  opacity: .8;
  z-index: -1;
}

.medium {
  position: fixed;
  top: 150px;
  right: 10%;
  mix-blend-mode: difference;
}
</style>
