<script setup lang="ts">
    const { products, fetchProducts } = useProducts();
    fetchProducts();

    const sessionProducts = useSessionStorage('products', products);

    useHead({
        title: `TopTom | Products`,
    });
</script>

<template>
    <ul class="products-list">
        <ProductsCard
            v-for="(item, index) of sessionProducts"
            :key="index"
            :data="item"
        />
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
