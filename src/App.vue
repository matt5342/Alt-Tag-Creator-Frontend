<template>
  <header class="mb-3">
    <NavBar />
  </header>

  <main class="container mb-5">
    <router-view />
  </main>

  <PageFooter />

</template>

<script setup lang="ts">
  import NavBar from './components/layout/NavBar.vue'
  import PageFooter from './components/layout/PageFooter.vue'
</script>