<script setup lang="ts">
    const store = useFavoritesStore();
    const { allFavorites, removeExpiredFavorites } = store;

    onNuxtReady(() => {
        setInterval(() => {
            allFavorites.forEach(removeExpiredFavorites);
        }, 24 * 60 * 60 * 1000);
    });
    // const favorites = [
    //     {
    //         id: 0,
    //         title: 'asdasd',
    //         description: 'asdasd',
    //         price: 100,
    //         image: 0,
    //     },
    //     {
    //         id: 1,
    //         title: 'asdasd',
    //         description: 'asdasd',
    //         price: 100,
    //         image: 2,
    //     },
    //     {
    //         id: 2,
    //         title: 'asdasd',
    //         description: 'asdasd',
    //         price: 100,
    //         image: 1,
    //     },
    //     {
    //         id: 3,
    //         title: 'asdasd',
    //         description: 'asdasd',
    //         price: 100,
    //         image: 0,
    //     },
    // ];
</script>

<template>
    <ul v-if="allFavorites.length !== 0" class="favorites-list">
        <ProductsCard
            class="favorites-list--item"
            v-for="(item, index) of allFavorites"
            :key="index"
            :data="item"
        />
    </ul>

    <div v-else class="favorites-list">
        <h2>
            There is no favorites. Go to
            <NuxtLink to="/">products page</NuxtLink> to add favorites.
        </h2>
    </div>
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
