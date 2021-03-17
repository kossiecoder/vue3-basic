<template>
  <h1>To-Do Page</h1>
  <TodoForm :editing="true" />
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';

export default {
  components: {
    TodoForm
  },
}
</script>

<style>

</style>