<template>
  <header class="header">
    <h2 class="header__title">TopTom</h2>
    <NuxtLink href="favorites">
      <h2 class="header-favorites">Избранное</h2>
    </NuxtLink>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header {
  padding: 2rem 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &__title {
    font-weight: 600;
  }
}
</style>