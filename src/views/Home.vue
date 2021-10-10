<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script> // https://rickandmortyapi.com/documentation

import ListCharacters from '@/components/ListCharacters.vue'
import FilterByStatus from '@/components/FilterByStatus.vue'
import FilterByName from '@/components/FilterByName.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
    // HelloWorld
  }
}
</script>

