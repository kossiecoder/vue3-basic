<template>
  <div>Todo Page</div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();

        console.log(route.params.id);
    }
}
</script>

<style>

</style>