<template>
  <h1>To-Do Page</h1>
  <div v-if="loading">
    Loading..
  </div>
  <form 
    v-else
    @submit.prevent="onSave"
  >
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label>Subject</label>
          <input 
            v-model="todo.subject" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label>Status</label>
          <div>
            <button 
              class="btn"
              type="button"
              :class="todo.completed ? 'btn-success' : 'btn-danger'"
              @click="toggleTodoStatus"
            >
              {{ todo.completed ? 'Completed' : 'Incomplete' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <button 
      type="submit" 
      class="btn btn-primary"
      :disabled="!todoUpdated"
    >
      Save
    </button>
    <button 
      class="btn btn-outline-dark ml-2"
      @click="moveToTodoListPage"
    >
      Cancel
    </button>
  </form>
  <Toast 
    v-if="showToast" 
    :message="toastMessage"
    :type="toastAlertType"
  />
  <div id="kossie">coder</div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { ref, computed, onBeforeMount,onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted  } from 'vue';
import _ from 'lodash';
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast
  },
    setup() {
      onBeforeMount(() => {
        console.log(document.querySelector('#kossie'))
      });
      onMounted(() => {
console.log(document.querySelector('#kossie'))
      });
      onBeforeUpdate(() => {
        console.log('before updat');
      })

      onUpdated(() => {
        console.log('updated')
      })
      onBeforeUnmount(() => {
        console.log('before unmount')
      })

      onUnmounted(() => {
        console.log('unmounted')
      })
      console.log('hello')
        const route = useRoute();
        const router = useRouter();
        const todo = ref(null);
        const originalTodo = ref(null);
        const loading = ref(true);
        const showToast = ref(false);
        const toastMessage = ref('');
        const toastAlertType = ref('');
        const todoId = route.params.id

        const getTodo = async () => {
          try {
            const res = await axios.get(`
              http://localhost:3000/todos/${todoId}
            `);

            todo.value = { ...res.data };
            originalTodo.value = { ...res.data };

            loading.value = false;
          } catch (error) {
            console.log(error);
            tiggerToast('Something went wrong', 'danger');
          }
        };

        const todoUpdated = computed(() => {
          return !_.isEqual(todo.value, originalTodo.value)
        });

        const toggleTodoStatus = () => {
          todo.value.completed = !todo.value.completed;
        };

        const moveToTodoListPage = () => {
          router.push({
            name: 'Todos'
          })
        };

        getTodo();

        const tiggerToast = (message, type = 'success') => {
          toastMessage.value = message;
          toastAlertType.value = type;
          showToast.value = true;
          setTimeout(() => {
            toastMessage.value = '';
            toastAlertType.value = '';
            showToast.value = false;
          }, 3000)
        }

        const onSave = async () => {
          try {
            const res = await axios.put(`
              http://localhost:3000/todos/${todoId}
            `, {
              subject: todo.value.subject,
              completed: todo.value.completed
            });

            originalTodo.value = {...res.data};
            tiggerToast('Successfully saved!');
          } catch (error) {
            console.log(error);
            tiggerToast('Something went wrong', 'danger')
          }
        };

        return {
          todo,
          loading,
          toggleTodoStatus,
          moveToTodoListPage,
          onSave,
          todoUpdated,
          showToast,
          toastMessage,
          toastAlertType,
        };
    }
}
</script>

<style>

</style>