<template>
    <div class="favorites">
        <h2 class="favorites__title">Избранное</h2>
        <FavoritesList />
    </div>
</template>

<script lang="ts" setup>
    import { routeLocationKey } from 'vue-router';

    const route = useRoute();

    useHead({
        title: route.path.slice(1),
    });
</script>

<style lang="scss" scoped>
    .favorites {
        padding: 2rem 8rem;
    }
</style>
