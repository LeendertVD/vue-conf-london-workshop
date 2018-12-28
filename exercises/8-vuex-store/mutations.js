export default {
  setItems(state, { items }) {
    state.items = items.filter(i => i !== undefined)
  },
  setPage(state, { page }) {
    state.page = page
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}
