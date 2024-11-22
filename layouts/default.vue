<script setup >
import AppHeader from '@/components/global/Header';
import AppFooter from '@/components/global/Footer';
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped></style>
