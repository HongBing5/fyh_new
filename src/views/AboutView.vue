<template>
  <div class="about">
    <!-- 顶部横图 -->
    <div class="top-image">
      <img src="@/assets/images/background.jpg" class="top-image">
    </div>

    <!-- 中间内容区域 -->
    <div class="content">
      <!-- 左侧图片 -->
      <div class="left">
        <img src="@/assets/images/company/company01.jpg" class="con-image">
        <img src="@/assets/images/company/company03.jpg" class="con-image">
      </div>

      <!-- 右侧内容 -->
      <div class="right">
        <h2>{{ company.name }}</h2>
        <p class="description">{{ company.description }}</p>
        <div class="items">
          <div v-for="item in company.items" :key="item.id" class="item">
            <i :class="item.icon"></i>
            <li>{{ item.title }}: {{ item.description }}</li>
          </div>
        </div>
        <h2>地址：超前路23号</h2>
      </div>

    </div>

    <!-- 底部联系信息 -->
    <!-- <div class="contact">
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
      </div>
    </div> -->
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
          { id: 1, title: '加工', description: '各种电路板的加工', icon: 'iconfont icon-jiagong' },
          // { id: 2, title: '修改', description: '重新抄写电路板', icon: 'iconfont icon-xiugai' },
          { id: 2, title: '研发', description: '电路版设计', icon: 'iconfont icon-jijiagong' }
          // 可以继续添加项目
        ],
        address: '超前路23号',
        email: ' ',
        phone: ' '
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
  justify-content: space-evenly;
  margin-top: 20px;
  padding: 0 5%;
}

.left {
  flex: 1;
}

.con-image {
  width: 100%;
  min-width: 320px;
}

.right {
  flex: 2;
  margin-left: 20px;
  padding-top: 20px;
}

.right h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.right p {
  opacity: .8;
}

.description {
  padding-bottom: 20px;
}

.items {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
}

.item {
  margin-top: 40px;
  margin-bottom: 10px;
}

/* 业务描述图标 */
.item i {
  font-size: 110px;
  color: rgb(14, 50, 70);
}

.contact {
  margin-top: 45px;
}

.contact h2 {
  font-size: 24px;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 200px;
  align-items: center;
  font-size: 18px;
}
</style>
