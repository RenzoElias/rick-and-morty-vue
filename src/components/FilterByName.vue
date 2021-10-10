<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      v-model="name"
      @keyup="filter()"
    >
  </div>
  <!-- keyup cada que se presiona una tecla, y se suelta se ejecutara -->
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  // Lo que se retorne se podra usar en Template
  setup() {
    const name = ref('') // Con (ref) // Para capturar el texto del INPUT, y se pone v-model="name"
    const store = useStore()
    const filter = () => {
      store.dispatch('filterByName', name.value)
    }
    return {
      name,
      filter
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 400px;
  margin: 3rem auto 0;
  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>