import { fetchItems } from './api'
import axios from 'axios'

jest.mock('axios')

test('resolves with data.items if /items returns 200', async () => {
  expect.assertions(1)
  const items = [{}, {}]
  axios.get.mockResolvedValue(items)
  const data = await fetchItems()
  expect(data).toBe(items)
})

test('rejects with an error if /items rejects with an Error', async () => {
  expect.assertions(1)
  axios.get.mockRejectedValue(new Error('500'))
  expect(fetchItems()).rejects.toBeInstanceOf(Error)
})
