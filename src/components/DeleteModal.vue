<template>
  <Modal>
    <template v-slot:title>
        Delete Todo
    </template>
    <template v-slot:body>
        Are you sure you want to delete this todo?
    </template>
    <template v-slot:footer>
        <button 
            type="button" 
            class="btn btn-secondary" 
            @click="onClose"
        >
            Close
        </button>
        <button 
            type="button" 
            class="btn btn-danger"
            @click="onDelete"
        >Delete</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
    components: {
        Modal
    },
    setup(props, { emit }) {
        const onClose = () => {
            emit('close');
        }

        const onDelete = () => {
            emit('delete');
        }
        
        return {
            onClose,
            onDelete
        }
    }
}
</script>

<style>

</style>