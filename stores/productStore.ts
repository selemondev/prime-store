import type { Product } from "~/types";

export const useProductStore = defineStore("productStore", () => {
    const products = ref<Product[]>([]);
    const loading = ref(false)
    const fetchProducts = async () => {
        try {
            loading.value = true
            const response = await $fetch<Product[]>('/api/products');
            response.forEach((product: Product) => {
                products.value.push(product)
            });
            loading.value = false;
        } catch(error) {
            loading.value = false;
            if(error instanceof Error) {
                console.log(error.message)
            }
        }
    };

    return {
        loading,
        products,
        fetchProducts
    }
});