<script setup lang="ts">
const favorites = [
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

<template >
  <ul class="favorites-list">
    <ProductsCard class="favorites-list--item" v-for="(item, index) of favorites" :key="index" :data="item">

    </ProductsCard>
  </ul>
</template>

<style lang="scss" scoped>
.favorites-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 2rem 0;
}
</style>