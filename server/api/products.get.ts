import type { Product } from "~/types";

export default defineEventHandler(async (event) => {
    const { baseUrl } = useRuntimeConfig(event)
    const response = await $fetch<Product>(`${baseUrl}/products`, {
        method: 'GET'
    });
    return response;
})