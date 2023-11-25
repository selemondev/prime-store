<script setup lang='ts'>
import type { Product } from '~/types';
const props = defineProps<Product>()

const cartStore = useCartStore();
const handleAddProductToCart = (product: Product) => {
    cartStore.addProductToCart(product)
}
</script>

<template>
    <PrimeCard>
        <template #header>
            <div class="grid place-items-center">
                <img :src="props.image" class="w-full h-64 px-6" />
            </div>
        </template>
        <template #subtitle>
            <div class="flex items-center justify-between">
                <div class="space-y-1">
                    <h2 class="font-semibold text-gray-800">
                        {{ props.title.slice(0, 15) }}
                    </h2>
                    <h4 class="capitalize">{{ props.category }}</h4>
                </div>

                <div>
                    <h2 class="text-lg font-bold text-black font-Roboto">${{ props.price }}</h2>
                </div>
            </div>
            
        </template>
        <template #content>
            <PrimeButton @click="handleAddProductToCart(props)" outlined icon="pi pi-shopping-cart" label="Add to cart" class="w-full" />
        </template>
    </PrimeCard>
</template>