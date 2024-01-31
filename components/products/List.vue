<script setup lang="ts">
import {onMounted} from 'vue';

const config = useRuntimeConfig()

const {data: products, pending, refresh} = await useFetch('/products', {
  baseURL: config.public.apiBase as string,
  mode: 'no-cors'
});

onMounted(() => {
  refresh()
})

</script>

<template>
  <ul v-if="!pending" class="products-list">
    <ProductsCard  v-for="(item, index) of products" :key="index" :data="item"/>
  </ul>
</template>


<style lang="scss" scoped>
.products-list {
  width: 100%;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
