import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

/* composition api */
export const useCounterStore = defineStore('counter', () => {
    /* state */
    const count = ref(0)

    /* methods */
    const increment = () => count.value++

    /* getters */
    const double = computed(() => count.value * 2)

    return {
        count,
        increment,
        double
    }
})
/* option api */
/*
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        double: (state) => state.count * 2
    }
})
*/
