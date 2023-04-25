<template>
    <div id="blog">
        <div class="blog-container bd-grid">
            <div class="blog-header">
                <h2>{{ title }}</h2>
            </div>
        </div>
        <div class="blog-title">
            <h1>Creating a Single Page Application with Vue.js</h1>
		    <p>Published on April 25, 2023</p>
        </div>
        <div class="blog-content">
            <h1>What Is Vue.js?</h1>
            <p>Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
            <p>Here is an example:</p>
            <img v-bind:src="Example">
			<p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways, one of it is Single Page Applications.</p>
            <h1>What is SPA?</h1>
            <p>Single Page Applications (SPAs) are becoming increasingly popular because they give a consistent user experience by dynamically loading content without refreshing the page. Vue.js is an excellent framework for developing SPAs because it provides a robust and adaptable architecture for generating reactive and dynamic user interfaces.</p>
			<p>One of the key benefits of using Vue.js for SPAs is its component-based architecture. Components are reusable and modular pieces of code that can be easily composed to build complex interfaces. Vue.js provides a simple and intuitive syntax for creating components, and its reactive data binding system makes it easy to update and manipulate data in real-time.</p>
			<p>To create a simple SPA with Vue.js, we can start by defining a root Vue instance and mounting it to a DOM element. We can then define our components, which can be nested inside each other to create a hierarchical structure. We can use Vue.js directives to bind data to our components and update the UI as needed.</p>
			
        </div>
    </div>
  </template>
  
  <script>

import example from "C:/Users/Jasper/Desktop/college_SOC/WCServer/Final/final-proj-2/src/assets/example-1.png"

  export default {
    name: 'Blog',
    data () {
        return{
            title: 'Blog',
            Example: example
        }
    }
  }
  </script>

<style>
#blog {
    width: 900px;
    align-content: center;
    display: inline-block;

}
blog-header{
    margin-bottom: 30px;
}

</style>