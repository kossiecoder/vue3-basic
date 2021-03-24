<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <input 
            :value="subject" 
            @input="onInput"
            type="text" 
            class="form-control"
        >
        <div 
            v-if="error"
            class="text-red"
        >
            {{ error }}
        </div>
    </div>
</template>

<script>
import { useContext } from 'vue';
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        error: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        }
    },
    setup() {
        const { emit } = useContext();
        const onInput = (e) => {
            emit('update:subject', e.target.value);
        };

        return {
            onInput
        }
    }
}
</script>

<style scoped>
  .text-red {
    color: red;
  }
</style>