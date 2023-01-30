<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useGetData } from '@/Composables/getData'

// Para poder acceder a ña ruta con route
const route = useRoute()

// para re dirijir a la ruta
const router = useRouter()

/* llamamos composable */
const { data, getData, loading,error } = useGetData()

const pokeView = ref([])

const back = () => [
    router.push('/pokemons')
]
// const getData = async () => {
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
//     pokeView.value = data
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//     pokeView.value = null
//   }
// }
//
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
  <p v-if="loading">Cargando información</p>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <div
    v-if="data"
  >
    <img :src="data.sprites?.front_default">
    <h1>Poke view: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>No existe el pokemon</h1>
  <button
      class="btn btn-outline-primary"
      @click="back"
  >
    Volver
  </button>
</template>


<style scoped>

</style>
