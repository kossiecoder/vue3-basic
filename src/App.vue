<template>
  <div class="container">
    <h2>To-Do List</h2>
    <TodoSimpleForm @add-todo="addTodo" />
    
    <div v-if="!todos.length">
      추가된 Todo가 없습니다
    </div>
    <TodoList 
      :todos="todos" 
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoSimpleForm,
    TodoList,
  },
  setup() {
    const todos = ref([]);

    const addTodo = (todo) => {
      todos.value.push(todo);
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const toggleTodo = (index) => {
      console.log(index)
      todos.value[index].completed = !todos.value[index].completed
    };

    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
    };
  }
}
</script>

<style>
  .todo {
    color: gray;
    text-decoration: line-through;
  }
</style>