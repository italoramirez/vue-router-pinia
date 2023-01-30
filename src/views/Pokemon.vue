<script setup>

import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useGetData } from '@/Composables/getData'

const pokemons = ref([])
const { data, getData, loading, error } = useGetData()

// onMounted(() => {
//   getData()
// })
// const getData = async () => {
//   try {
//     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
//     pokemons.value = data.results
//   } catch (error) {
//     console.log(error)
//   }
// }

getData('https://pokeapi.co/api/v2/pokemon')
</script>
<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando información</p>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <div v-if="data">
    <div
        v-for="pokemon in data.results"
        :key="pokemon.name"
        class="card"
    >
      <router-link :to="`/pokemons/${pokemon.name}`">
        <span class="text-black">
          {{ pokemon.name }}
        </span>
      </router-link>
    </div>
    <div class="mt-2">
      <button class="btn btn-outline-primary me-2" :disabled="!data.previous" @click="getData(data.previous)">Previous</button>
      <button class="btn btn-outline-primary" :disabled="!data.next" @click="getData(data.next)">Next</button>
    </div>
  </div>
</template>
