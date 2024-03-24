<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center align-items-center">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">Alt Tag Creator</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'ImageAnalysis' }" class="nav-link">Image Analysis</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style>
.logo {
    height: 30px;
    vertical-align: middle;
}
.nav-item.cart {
    margin-left: auto;
    position: relative;
    border-right: none;
}
</style>