import actions from './actions'
import { fetchData } from './api'
jest.mock('./api')


test('fetchItems commits setLoading when called', async() => {
  // Arrange
  const items = [1, 2, 3]
  fetchData.mockResolvedValue(items)
  const commit = jest.fn()

  // Act
  await actions.fetchItems({ commit })

  // Assert
  expect(commit).toHaveBeenCalledWith('setItems', { items })
})

test('fetchItems commits items returned by api method and sets loading to false', async() => {
  // Arrange
  const items = [1, 2, 3]
  fetchData.mockResolvedValue(items)
  const commit = jest.fn()

  // Act
  await actions.fetchItems({ commit })

  // Assert
  expect(commit).toHaveBeenCalledWith('setItems', { items })
  expect(commit).toHaveBeenCalledWith('setLoading', false)
})

test('fetchItems commits error and sets loading to false if api method rejects', async() => {
  // Arrange
  const items = [1, 2, 3]
  fetchData.mockRejectedValue(new Error('500'))
  const commit = jest.fn()

  // Act
  await actions.fetchItems({ commit })

  // Assert
  expect(commit).toHaveBeenCalledWith('setError', { message: 'Failed to load items' })
  expect(commit).toHaveBeenCalledWith('setLoading', false)
})
