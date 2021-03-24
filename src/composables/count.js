import { reactive, toRefs } from 'vue'

export const useCount = () => {
    const state = reactive({
        count: 0
    });

    return toRefs(state);
}
