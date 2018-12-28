import { fetchItems } from './api'
import axios from 'axios'

jest.mock('axios')

test('resolves with data.items if /items returns 200', async () => {
    // Arrange
    expect.assertions(1)
    const items = [{}, {}]

    axios.get.mockResolvedValue(items)

    // Act
    const data = await fetchItems()

    // Assert
    expect(data).toBe(items)
})

    

test('rejects with error if /items returns 500', async () => {
    // Arrange
    expect.assertions(1)

    axios.get.mockRejectedValue(new Error('500'))

    // Act and Assert
    expect(fetchItems()).rejects.toBeInstanceOf(Error)
})
