<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useGetData } from '@/Composables/getData'
import { useFavoritesStore } from '@/store/favorites'

// Para poder acceder a ña ruta con route
const route = useRoute()

// para re dirijir a la ruta
const router = useRouter()

/* llamamos composable */
const { data, getData, loading, error } = useGetData()

const pokeView = ref([])

const useFavorites = useFavoritesStore()

const { add, findPokemon } = useFavorites

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
  <div class="text-center">

    <p v-if="loading">Cargando información</p>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div
        v-if="data"
    >
      <img :src="data.sprites?.front_default">
      <h1>Poke view: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <div class="d-flex flex-column justify-content-center align-content-center w-25">
      <button
          class="btn btn-outline-primary mb-2"
          @click="back"
      >
        Volver
      </button>
      <button
          class="btn btn-outline-primary"
          :disabled="findPokemon(data?.name)"
          @click="add(data)"
      >
        Agregar favotitos
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>
