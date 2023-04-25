<template>
    <div class="home">
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <p>{{ msg }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to my first ever Vue.js App'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  .home{
    width: 900px;
    display: inline-block;
    align-content: center;
  }
  </style>