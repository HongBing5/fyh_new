<template>
  <div class="home">
    <HelloWorld />
    <ShopList></ShopList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ShopList from '@/components/ShopList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ShopList

  }
}
</script>
