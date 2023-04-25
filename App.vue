<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul class="navbar-nav me-auto">
        <li class="nav-item" role="presentation">
          <router-link class="nav-link" to="/" data-bs-toggle="tab" aria-selected="true" role="tab" tabindex="-1">Home</router-link>
        </li>
        <li class="nav-item" role="presentation">
          <router-link class="nav-link" to = "/blog" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">Blog</router-link>
        </li>
        <li class="nav-item" role="presentation">
          <router-link class="nav-link" to = "/gallery" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">Gallery</router-link>
        </li>
        <li class="nav-item" role="presentation">
          <router-link class="nav-link" to = "/contact">Contact</router-link>
        </li>
    </ul>
    </nav>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>