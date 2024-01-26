<script setup lang="ts">
const products = [
  {
    id: 0,
    title: 'asdasd',
    description: 'asdasd',
    price: 100,
    image: 0
  },
  {
    id: 1,
    title: 'asdasd',
    description: 'asdasd',
    price: 100,
    image: 2
  },
  {
    id: 2,
    title: 'asdasd',
    description: 'asdasd',
    price: 100,
    image: 1
  },
  {
    id: 3,
    title: 'asdasd',
    description: 'asdasd',
    price: 100,
    image: 0
  }
]
</script>

<template>
  <ul class="products-list">
    <ProductsCard v-for="(item, index) of products" :key="index" :data="item"/>
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
