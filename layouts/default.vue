<template>
  <div class="default">
    <TheHeader/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<style lang="scss" scoped>
.default {
  width: 100vw;
  height: 100vh;
  background: #F0F0F0;
}
</style>