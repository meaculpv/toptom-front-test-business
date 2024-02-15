interface Product {
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}

export const useProducts = () => {
    const config = useRuntimeConfig();
    const products = ref<Product[]>([]);

    const fetchProducts = async (): Promise<void> => {
        try {
            const { data } = await useFetch<Product[]>('/products', {
                baseURL: config.public.apiBase as string,
                mode: 'no-cors',
            });

            products.value = data.value as Product[];
            useSessionStorage('products', products.value);
        } catch (e) {
            console.error('Error fetching products:', e);
        }
    };

    return {
        products,
        fetchProducts,
    };
};
