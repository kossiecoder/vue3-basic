<template>
  <div class="container">
    <h2>To-Do List</h2>
    <form  
      @submit.prevent="onSubmit"
      class="d-flex"
    >
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
    </form>
    <div class="card mt-2">
      <div class="card-body p-2">
        {{ todos[0].subject }}
      </div>
    </div>
    <div class="card mt-2">
      <div class="card-body p-2">
        {{ todos[1].subject }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const todo = ref('');
    const todos = ref([
      {id: 1, subject: '휴대폰 사기'},
      {id: 2, subject: '장보기'},
    ]);

    const onSubmit = () => {
      todos.value.push({
        id: Date.now(),
        subject: todo.value
      });
    };

    return {
      todo,
      todos,
      onSubmit,
    };
  }
}
</script>

<style>
  .name {
    color: red;
  }
</style>