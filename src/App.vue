<template>
  <div class="container">
    <h2>To-Do List</h2>
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <div class="flex-grow-1 mr-2">
          <input
            class="form-control"
            type="text" 
            v-model="todo"
            placeholder="Type new to-do"
          >
        </div>
        <div>
          <button 
            class="btn btn-primary"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
      <div v-show="hasError" style="color: red">
        This field cannot be empty
      </div>
    </form>
    <div 
      v-for="todo in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2">
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox"
            v-model="todo.completed"
          >
          <label class="form-check-label">
            {{ todo.subject }}
          </label>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const todo = ref('');
    const todos = ref([]);
    const hasError = ref(false);

    const onSubmit = () => {
      if (todo.value === '') {
        hasError.value = true;
      } else {
        todos.value.push({
          id: Date.now(),
          subject: todo.value,
          completed: true,
        });
        hasError.value = false;
        todo.value = '';
      }
    };

    return {
      todo,
      todos,
      onSubmit,
      hasError,
    };
  }
}
</script>

<style>
  .name {
    color: red;
  }
</style>