<template>
  <h3 class="mt-4">Vue3 기초 익히기 - Composition Api</h3>
</template>

<script>
import { useCount } from '@/composables/count';

export default {
  setup() {
    const { count } = useCount();

    return {
      count
    }
  }
}
</script>

<style>

</style>