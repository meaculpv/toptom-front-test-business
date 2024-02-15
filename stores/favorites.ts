//TODO Стор для избранного
import { defineStore } from 'pinia';
import { type Product } from '#build/types/Product';

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref<Product[]>([]);

    const allFavorites = computed(() => favorites.value);

    function addToFav(product: Product) {
        if (favorites.value.find((item) => item.id === product.id)) {
            console.log('this product is already in favorites.');

            return;
        }

        const expirationTimestamp = new Date().getTime() + 7 * 24 * 60* 60 * 1000;
        console.log('expirationTimestamp', expirationTimestamp);

        product.expirationDate = expirationTimestamp;
        favorites.value.push(product);
    }

    function removeFav(product: Product) {
        const index = favorites.value.findIndex(
            (item) => item.id === product.id
        );
        if (index !== -1) {
            favorites.value.splice(index, 1);
        }
    }

    function removeExpiredFavorites(product: Product) {
        const index = favorites.value.findIndex(
            (item) =>
                item.id === product.id &&
                item.expirationDate < new Date().getTime()
        );

        if (index !== -1) {
            favorites.value.splice(index, 1);
        }
    }

    return { allFavorites, addToFav, removeFav, removeExpiredFavorites };
});
