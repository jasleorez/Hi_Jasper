<template>
    <div id="contact">
        <h1>{{ title }}</h1>
        <form>
  <fieldset>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">All information will be secured.</small>
    </div>
    <div class="form-group">
      <label for="message1" class="form-label mt-4">Message</label>
      <input type="message" class="form-control" id="messageholder" placeholder="Message">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data () {
        return{
            title: 'Contact'
        }
    }
  }
  </script>

<style>
#contact{
    width: 900px;
    display: inline-block;
}
#messageholder{
    width: 100%;
    height: 250px;
}
.form-input input{
    text-align: top;
    float: left;

}
</style>