<template>
    <header class="header">
        <NuxtLink to="/">
            <h2 class="header__title">TopTom</h2>
        </NuxtLink>
        <NuxtLink to="/favorites">
            <h2 class="header-favorites">Избранное</h2>
        </NuxtLink>
    </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
    .header {
        padding: 2rem 7.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: black;
        }

        &__title {
            font-weight: 600;
        }
    }
</style>
