<script setup lang='ts'>
const { $toast } = useNuxtApp();
const emit = defineEmits<{
    (e: 'close'): void
}>();
const cartStore = useCartStore();
const handleProductCheckout = () => {
    cartStore.cart = [];
    emit('close')
    $toast.success('Thank you for your purchase! Your order has been successfully placed.')
};
</script>

<template>
    <PrimeToast position="top-left" group="tl" />
    <div class="mt-2 space-y-4">
        <div class="font-Roboto">
            <div class="flex items-center justify-between py-2 font-bold text-black border-b">
                <h1>Taxes</h1>
                <h1>$0.00</h1>
            </div>
            <div class="flex items-center justify-between py-2 font-bold text-black border-b">
                <h1>Shipping</h1>
                <h4 class="text-base text-gray-500">Calculated at checkout</h4>
            </div>
            <div class="flex items-center justify-between py-2 font-bold text-black border-b">
                <h1>Total</h1>
                <h1 class="font-bold text-black">${{ cartStore.totalProductsPrice }}</h1>
            </div>
        </div>

        <div>
            <PrimeButton @click="handleProductCheckout" label="Proceed to checkout" class="w-full font-Roboto" />
        </div>
    </div>
</template>