<template>
  <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input 
            class="form-check-input" 
            type="checkbox"
            :value="todo.completed"
            @change="toggleTodo(index)"
          >
          <label 
            class="form-check-label"
            :class="{ todo: todo.completed }"
          >
            {{ todo.subject }}
          </label>
        </div>
        <div>
          <button 
            class="btn btn-danger btn-sm"
            @click="deleteTodo(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    setup(props, context) {
        const toggleTodo = (index) => {
          context.emit('toggle-todo', index);
        };
        
        const deleteTodo = (index) => {
          context.emit('delete-todo', index);
        };

        return {
            toggleTodo,
            deleteTodo,
        };
    }
}
</script>

<style>

</style>