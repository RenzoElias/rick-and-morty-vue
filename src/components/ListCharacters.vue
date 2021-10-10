<template>
  <section>
    <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <!-- {{ character.name }} -->
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import CardCharacter from '@/components/CardCharacter'
export default {
  components: {
    CardCharacter
  },
  setup(){ // Vue 3 /se usara/ Composicion API ( setup() )
    const store = useStore() // Para acceder al useStore y acceder a las Actions
    const characters = computed( () => { // Propiedad Computada tiene que devolver algo
      return store.state.charactersFilter // el Array
    } )
      onMounted(() => { // Ciclo de vida, para usar el getCharacters de Vuex index.js
        store.dispatch('getCharacters') // para Acceder a los Actions la funcion getCharacters, al ser Montado la App
      })

    return {
      characters // Esto es el array (charactersFilter[])
    }
  }
}
</script>

<style>
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>