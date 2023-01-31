import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    if (localStorage.getItem('favorites')) {
        favorites.value = JSON.parse(localStorage.getItem('favorites'))
    }

    const add = (poke) => {
        favorites.value.push(poke)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
    const remove = (id) => {
        favorites.value = favorites.value.filter(f => f.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const findPokemon = name => favorites.value.find(i => i.name === name)


    return {
        favorites,
        add,
        remove,
        findPokemon
    }
})
