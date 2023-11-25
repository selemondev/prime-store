<script setup lang='ts'>
const productStore = useProductStore();
const { loading } = storeToRefs(productStore)
</script>

<template>
    <div v-if="loading"
        class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
        <div v-for="n of 16" :key="n">
            <ProductCardSkeleton />
        </div>
    </div>
    <div v-else class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
        <div v-for="product in productStore.products" :key="product.id">
            <ProductCard :id="product.id" :title="product.title" :description="product.description" :price="product.price"
                :category="product.category" :image="product.image" :rating="product.rating" />
        </div>
    </div>
</template>