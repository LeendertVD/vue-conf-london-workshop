import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default function createStoreConfig() {
  const state = {
    items: [],
    page: 1,
    loading: false
  }

  return {
    actions,
    getters,
    mutations,
    state
  }
}
