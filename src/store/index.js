import { createStore } from 'vuex'

export default createStore({
  state: { // Variables STATES
    characters: [],
    charactersFilter: []
  },
  mutations: { // Son los que modifican a los STATES
    // UseState (state, setState)
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    },
  },
  actions: { // Para la modificacion se hace con la ACCIONES
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
        commit('setCharacters', data.results) // commit // para entrar a Mutation, y entrar a la funcion '', dando el payload
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.error(error);
      }
    },
    filterByStatus({commit, state}, status) {
      const results = state.characters.filter( (character) => { // Filter del array characters: [] // LINEA 5
        // Retornara los que incluyan el (status) que le pasemos por parametro
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results) // Ya Filtrado STATUS
    },
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter( (character) => { // Filter del array characters: [] // LINEA 5
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharactersFilter', results) // Ya Filtrado NAME
    }
  },
  modules: {
  }
})
