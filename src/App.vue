<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'Home'}">
      Kossie Coder
    </router-link>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Todos'}">
          Todos
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="container">
      <router-view/>
  </div>
  
  <Toast />
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast
  },
}
</script>

<style scoped>

</style>