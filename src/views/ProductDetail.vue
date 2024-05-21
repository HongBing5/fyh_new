<template>
  <div class="con-edge">
    <el-page-header @back="goBack" content="详情" class="header"></el-page-header>
    <div class="product-detail" v-if="product">
      <h1>{{ product.name }}</h1>
      <!-- 产品简单介绍 -->
      <div class="details">
        <p>{{ product.description }}</p>
      </div>
      <!-- 循环添加文件对应图片 -->
      <div class="gallery">
        <el-row>
          <el-col :span="10" v-for="(item, index) in product.image" :key="index">
            <el-image :src="item.url" :alt="item.alt" fit="cover"></el-image>
          </el-col>
        </el-row>
      </div>
      <!-- 附件 -->
      <h2 v-if="product.pdfUrl || product.videoUrl">附件：</h2>
      <div class="attachments">
        <!-- 如果有PDF文件 -->
        <div v-if="product.pdfUrl">
          <h3>PDF文件：</h3>
          <el-button type="primary" icon="el-icon-download" @click="downloadPDF">查看PDF说明</el-button>
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
      // loading: true,
      id: 0
    }
  },

  created () {
    this.id = this.$route.params.id
    this.getProductData()
  },
  methods: {
    getProductData () {
      // 从本地存储中获取数据
      const storedData = localStorage.getItem(`pageData_${this.id}`)
      if (storedData) {
        this.product = JSON.parse(storedData)
        // this.loading = false
      } else {
        this.getProductById(this.id)
      }
    },
    getProductById (id) {
      this.product = this.products.find(item => item.id === id)
      // 将数据存储到本地存储
      localStorage.setItem(`pageData_${id}`, JSON.stringify(this.product))
      // this.loading = false
    },
    // 返回上一页面
    goBack () {
      this.$router.go(-1)
    },
    // 下载在新窗口打开 pdf 文件
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
