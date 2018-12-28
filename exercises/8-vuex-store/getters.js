export default {
  displayItems({ page, items }) {
    const perPage = 20
    const index = perPage * page
    return items.slice(index - perPage, index)
  }
}
