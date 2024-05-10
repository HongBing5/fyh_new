<template>
  <div>
    <el-page-header @back="goBack" content="详情" class="header"></el-page-header>
    <div class="product-detail"  v-if="!loading">
      <h1 >{{ product.name }}</h1>
      <!-- 产品简单介绍 -->
      <div class="details">
        <p>{{ product.description }}</p>
      </div>
      <!-- 循环添加文件对应图片 -->
      <div class="gallery">
        <el-row>
          <el-col :span="12" v-for="(item, index) in product.image" :key="index">
            <el-image :src="item.url" :alt="item.alt" fit="cover"></el-image>
          </el-col>
        </el-row>
      </div>
      <!-- 附件 -->
      <h2 v-if="product.pdfUrl || product.videoUrl">附件：</h2>
      <div class="attachments">
        <!-- 如果有PDF文件 -->
        <div v-if="product.pdfUrl" >
          <h3>PDF文件：</h3>
          <el-button  type="primary" icon="el-icon-download" @click="downloadPDF">查看PDF说明</el-button>
        </div>

        <!-- 如果有视频文件 -->
        <div v-if="product.videoUrl" class="video-container">
          <h3>视频演示：</h3>
          <video controls>
            <source :src="product.videoUrl" type="video/mp4">
            您的浏览器不支持播放视频。
          </video>
        </div>
      </div>
    </div>
    <div v-else  v-loading="loading">
    <!-- 加载动画或占位符 -->

    <p>若刷新失败可以尝试返回主页重新进入...</p>
  </div>
  </div>
</template>

<script>
import products from '../data/products.js'

export default {
  name: 'ProductDetail',
  data () {
    return {
      products,
      product: null,
      loading: true // 初始状态为加载中
    }
  },

  async  created () {
    await this.getProductById(this.$route.params.id)
    this.loading = false // 数据加载完成后将 loading 状态设置为 false
  },
  methods: {
    getProductById (id) {
      console.log(id)// 路由拿过来的id
      console.log(this.products)
      this.product = this.products.find(item => item.id === id)
      console.log(this.product)
    },
    // 返回上一页面
    goBack () {
      this.$router.go(-1)
    },
    // 下载在新窗口打开pdf文件
    downloadPDF () {
      window.open(this.product.pdfUrl)
    }
  }
}
</script>

<style scoped>
.header {
  margin-top: 90px;
  /* position: fixed; */
  /* background-color: skyblue; */
  /* padding: 20px; */
}

.product-detail {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
}

.details {
  text-align: center;
}

.attachments {
  margin: 20px 0;
}
h3{
  padding: 20px;
}
.video-container {
  margin-top: 20px;
  max-width: 100%;
}
/* 对应加载过来的图片样式 */
.gallery {
  padding: 20px;
}

/* 样式可以根据需要进行调整 */
.el-row {
  margin: 0 -5px;
}

.el-col {
  padding: 5px;
}
</style>
