import { fetchData } from './api'

export default {
  fetchItems({ commit }) {
    commit('setLoading', true)
    return fetchData()
      .then(items => {
        commit('setLoading', false)
        commit('setItems', { items })
      })
      .catch(() => {
        commit('setLoading', false)
        commit('setError', { message: 'Failed to load items' })
      })
  }
}
