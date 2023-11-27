<script setup lang='ts'>
const cartStore = useCartStore();
const isSidebarOpen = ref(false);
const handleOpenSidebar = () => {
    isSidebarOpen.value = true;
};

const handleCloseSidebar = () => {
    isSidebarOpen.value = false;
}
const cartHasProducts = computed(() => {
    return cartStore.cart.length >= 1
})
</script>

<template>
    <header class="sticky top-0 z-10">
        <nav class="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200">
            <div class="flex items-center">
                <Icon name="prime:prime" class="text-3xl text-green-500 md:text-4xl" />
                <h1 class="text-base font-bold md:text-xl">PRIME<span class="text-green-500">STORE</span></h1>
            </div>

            <div>
                <div>
                    <button type="button" @click="handleOpenSidebar"
                        class="relative px-3 py-2 transition-all duration-200 ease-in border border-gray-200 rounded-md hover:bg-gray-100">
                        <Icon name="ph:shopping-cart-simple" class="text-xl" />
                        <div
                            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-md -top-2 -end-2">
                            {{ cartStore.totalCartProducts }}
                        </div>
                    </button>
                </div>

                <div>
                    <div class="flex card justify-content-center">
                        <PrimeSidebar v-model:visible="isSidebarOpen" header="My Cart" position="right">
                            <div v-if="!cartHasProducts" class="grid w-full min-h-screen place-items-center">
                                No products available in the cart
                            </div>
                            <div v-else class="flex flex-col justify-between h-full">
                                <div class="overflow-y-scroll h-[650px]">
                                    <div v-for="cartProduct in cartStore.cart" :key="cartProduct.id">
                                        <CartProductCard :id="cartProduct.id" :title="cartProduct.title"
                                            :description="cartProduct.description" :price="cartProduct.price"
                                            :category="cartProduct.category" :image="cartProduct.image"
                                            :rating="cartProduct.rating" />
                                    </div>
                                </div>
                                <CartProductPaymentDetails @close="handleCloseSidebar"/>
                            </div>
                        </PrimeSidebar>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>