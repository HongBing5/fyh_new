<template>
  <div class="product-list">
    <div class="product" v-for="(product, index) in products" :key="index">
     <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
        <img :src="product.image[0].url" :alt="product.name">
        <div class="product-details">
          <h3 class="title">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// 导入商品数据
import products from '../data/products.js'
export default {
  name: 'ProductList',
  data () {
    return {
      // 使用导入的商品数据初始化 products 数据
      products: products
    }
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  width: 300px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-details {
  text-align: center;
}
/* 标题存在下划线 */
.title{
  color: black;
  text-decoration: none !important;
}

.product button {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.product button:hover {
  background-color: #0056b3;
}
</style>
