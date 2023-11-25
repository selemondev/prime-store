<script setup lang="ts">
const productStore = useProductStore();
productStore.fetchProducts()
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>