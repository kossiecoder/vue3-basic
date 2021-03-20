<template>
  <div class="modal-wrapper">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span @click="onClose">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button 
                type="button" 
                class="btn btn-secondary" 
                @click="onClose"
            >
                Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    setup(props, { emit }) {
        const onClose = () => {
            emit('close');
        }
        return {
            onClose
        }
    }
}
</script>

<style scoped>
    .modal-wrapper {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>