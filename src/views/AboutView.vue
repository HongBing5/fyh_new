<template>
  <div class="about">
    <!-- 顶部横图 -->
    <div class="top-image">
      <img src="@/assets/images/background.jpg"  class="top-image">
    </div>

    <!-- 中间内容区域 -->
    <div class="content">
      <!-- 左侧图片 -->
      <div class="left">
        <img src="@/assets/images/company01.jpg"  class="left-image">
      </div>

      <!-- 右侧内容 -->
      <div class="right">
        <h2>{{ company.name }}</h2>
        <p class="description">{{ company.description }}</p>
        <div class="items">
          <div v-for="item in company.items" :key="item.id" class="item">
            <li>{{ item.title }}: {{ item.description }}</li>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部联系信息 -->
    <div class="contact">
      <h2>联 系 信 息</h2>
      <div class="contact-info">
        <div class="info-item">
          <strong><el-button type="primary" icon="el-icon-position"></el-button></strong> {{ company.address }}
        </div>
        <div class="info-item">
          <strong><el-button type="primary" icon="el-icon-message"></el-button></strong> {{ company.email }}
        </div>
        <div class="info-item">
          <strong><el-button type="primary" icon="el-icon-phone"></el-button></strong> {{ company.phone }}
        </div>
        <!-- 可以根据需要添加更多联系信息 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      company: {
        name: '北京飞奕豪科技有限公司',
        description: '一家电路板，设计，开发，制作的公司',
        items: [
          { id: 1, title: '加工', description: '各种电路板的加工' },
          { id: 2, title: '修改', description: '重新抄写电路板' },
          { id: 2, title: '研发', description: '电路版设计' }
          // 可以继续添加项目
        ],
        address: '超前路23号',
        email: '暂无',
        phone: '暂无'
      }
    }
  }
}
</script>

<style>
/* 样式可以根据你的需要进行调整 */
.about {
  /* 顶部横图 */
  margin-top: 40px;
}
.top-image img {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.left {
  flex: 1;
}
.left-image {
  width: 100%;
  margin-left: 10%;
}
.right {
  flex: 2;
  margin-left: 20px;
}
.right h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.description{
  padding-bottom: 20px;
}
.items {
  margin-bottom: 20px;
  text-align: center;

}
.item {
  margin-bottom: 10px;
}

.contact {
  margin-top: 20px;
}
.contact h2 {
  font-size: 24px;
}
.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 200px;
  align-items: center;
}
.info-item {
  flex: 1
}
</style>
