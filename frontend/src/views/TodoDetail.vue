<template>
    <div>
        <h1>Edit a Bucket List</h1>
        <hr>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodoItem">
        <br>
        <button @click="editTodo()">Update List</button>
        <hr>
    </div>
</template>

<script>
import todocrud from '../modules/todocrud.js'
export default {
    setup() {
        
        const {editTodo, state, GetSpecificTodo, todo, todoID} = todocrud()

        GetSpecificTodo()

        return {
            todo,
            todoID,
            editTodo,
            state
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

hr {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
}

input {
  display: block;
  width: 50%;
  padding: 10px;
  margin-left: 25%;
  margin-bottom: 1rem;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #3e8e41;
}

button:active {
  background-color: #005cbf;
}
</style>