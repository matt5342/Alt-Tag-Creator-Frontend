<template>
	<footer class="footer mt-auto py-3 bg-dark">
		<div class="container">
			<span class="text-white">© {{ currentYear }} Alt Tag Creator. All rights reserved.</span>
		</div>
	</footer>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const currentYear = ref(new Date().getFullYear());

  onMounted(() => {
    currentYear.value = new Date().getFullYear();
  });
  </script>