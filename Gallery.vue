<template>
    <div id="gallery">
        <h1>{{ title }}</h1><br>
        <h1>My first Single Page Application</h1><br>
        <div class="gallery__img">
            <div class="gridscroll">
                <h3>Home page</h3>
                <img v-bind:src="Home">
                <h3>Blog page</h3>
                <img v-bind:src="Blog">
                <h3>Contact page</h3>
                <img v-bind:src="Contact">
            </div>
        </div>
    </div>
  </template>



  <script>
  import home from "C:/Users/Jasper/Desktop/college_SOC/WCServer/Final/final-proj-2/src/assets/home.png"
  import blog from "C:/Users/Jasper/Desktop/college_SOC/WCServer/Final/final-proj-2/src/assets/blog.png"
  import contact from "C:/Users/Jasper/Desktop/college_SOC/WCServer/Final/final-proj-2/src/assets/contact.png"

  export default {
    name: 'Gallery',
    data () {
        return{
            title: 'Gallery',
            Home: home,
            Blog: blog,
            Contact: contact
        }
    }
  }
  </script>

<style>
#gallery{
    width: 900px;
    display: inline-block;
}
img{
    width: 100%;
    display: inline-flex;
    border-style: solid;
    border-color: black;
}
h3{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>