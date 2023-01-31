<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const useCounter = useCounterStore()

/* la reactividad solo funcion para los methods (getter y ref, se transfroma en reactive no se puede reestructirar simplemente) */
const { increment } = useCounter

/* uso de destrutiración de getters y ref */
const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <main class="text-center">
    <h1> home counter: {{ count }} </h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment" class="btn btn-outline-primary">Increment</button>
  </main>
</template>
