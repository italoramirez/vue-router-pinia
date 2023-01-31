<script setup>
import { useFavoritesStore } from '@/store/favorites'
import { storeToRefs } from 'pinia'

const useFavorites = useFavoritesStore()

const { favorites } = storeToRefs(useFavorites)
const { remove } = useFavorites

</script>

<template>
  <h1>Favoritos</h1>
  <p v-if="favorites.length === 0">Sin favoritos</p>
  <ul v-else class="list-group text-center">
    <li
        v-for="pokemon in favorites"
        :key="pokemon.id"
        class="list-group-item"
    >
      <div>
        {{ pokemon.name }}
      </div>
      <div>
        <button class="btn btn-sm btn-outline-danger me-2" @click="remove(pokemon.id)">Eliminar</button>
        <router-link :to="`pokemons/${pokemon.name}`">
          <button class="btn btn-sm btn-outline-info">Más información</button>
        </router-link>
      </div>
    </li>
  </ul>
</template>
