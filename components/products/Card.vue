<script setup lang="ts">
    import LikeIcon from '@/icons/Like.vue';

    const props = defineProps(['data']);

    const store = useFavoritesStore();
    const { allFavorites, addToFav, removeFav, removeExpiredFavorites } = store;

    const isFavorite = allFavorites.some((item) => item.id === props.data.id);

    const addFavorite = () => {
        //TODO Функция добавления в избранные
        if (isFavorite) {
            removeFav(props.data);
        } else {
            addToFav(props.data);
        }
    };

    // setInterval(removeExpiredFavorites, 10000);
</script>

<template>
    <div class="product-card">
        <img :src="`/${data.image}.png`" alt="" class="product-card__image" />
        <div class="product-card__content">
            <h2 class="product-card__title">{{ data.title }}</h2>
            <span class="product-card__price">{{ data.price }} ₸</span>
            <div @click="addFavorite" class="product-card__like">
                <LikeIcon
                    class="product-card__like__icon product-card__like__icon--clicked"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .product-card {
        width: 16.875rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: #fff;
        border-radius: 12px 12px;
        cursor: pointer;
        position: relative;

        &__title {
            color: #0f0e14;
            text-overflow: ellipsis;
            font-size: 1rem;
            font-style: normal;
            line-height: 1.5rem;
        }

        &__content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        &__price {
            border-radius: 0.5rem;
            background: #f1f3f9;
            padding: 0.5rem 0.75rem;
            color: #0f0e14;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.5rem;
        }

        &__like {
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #fff;

            &__icon {
                &--clicked {
                    fill: #e43a63;
                }
            }
        }
    }
</style>
