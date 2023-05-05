<template>
    <div>
        <h1>Bucket List</h1>
        <br>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodoItem">
        <br>
        <button @click="newTodo()">Add in the list</button>

        <div v-for="todo in state.todos" :key="todo._id">
          <hr>
            <router-link :to="'/todo/${todo._id}'">
            <h4>
                {{todo.author}}
            </h4>
            <p>
                {{todo.todo}}
            </p>
            <button @click="editTodo(todo._id)">Edit Todo</button>
            </router-link>
            <button @click="deleteTodo(todo._id)">Delete Todo</button>
            <hr>
        </div>
    </div>
</template>

<script>
import todocrud from '../modules/todocrud.js'
import { onMounted } from 'vue'
    export default {
        setup() {

            const  { state, GetAllTodos, newTodo, deleteTodo, editTodo } = todocrud ()


            onMounted(() => {
                GetAllTodos()
            })
            return { state, GetAllTodos, newTodo, deleteTodo, editTodo }
        },
        
    }      
</script>

<style lang="scss" scoped>
/* Style the title */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Style the form inputs */
input[type="text"] {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style the todo list items */
.todo-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: block;
}

/* Style the delete and edit buttons */
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #3e8e41;
}
</style>

