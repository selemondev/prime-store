<script setup lang="ts">
const productStore = useProductStore();
productStore.fetchProducts()
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster position="top-right" richColors closeButton />
  </NuxtLayout>
</template>