import axios from 'axios'

export function fetchItems() {
  return axios.get('/items')
}
