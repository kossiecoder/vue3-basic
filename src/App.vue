<template>
  <div class="name">
    {{ name }}
  </div>
  <button 
    class="btn btn-primary"
    v-on:click="updateName"
  >
    Click
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref({
      id: 1
    });

    // const greeting = (name) => {
    //   return 'Hello, ' + name;
    // };

    // const greet = greeting(name); 

    const updateName = () => {
      name.value.id = 2;
      console.log(name)
    };

    return {
      name,
      updateName,
    };
  }
}
</script>

<style>
  .name {
    color: red;
  }
</style>