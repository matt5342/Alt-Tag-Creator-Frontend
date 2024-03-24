
<template>
  <div class="container">
    <div class="row mb-3 text-center">
      <h1>Welcome to the Alt Tag Creator</h1>
    </div>
    <div class="row text-center">
      <div class="col-3"></div>
      <div class="col-6 text-center">
        <img src="../../assets/home-image.jpeg" alt="Robot" class="img-fluid rounded mb-2 w-50 mx-auto"/>
        <p>
          This is a simple tool to help you label your images with alt tags. 
          Alt tags are important for accessibility and SEO. 
          This tool will help you label your images with alt tags.
        </p>
        <p>
          <router-link to="/open_ai/upload">Get Started</router-link>labeling your images with alt tags!
        </p>
      </div>
      <br />
      <div class="col-3"></div>
    </div>

  </div>
</template>

<script setup lang="ts">

  // defineProps<{
  //   msg: string
  // }>();

</script>

<style scoped>
.home {
  text-align: center;
}

</style>
