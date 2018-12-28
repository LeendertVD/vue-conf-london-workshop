import getters from './getters'

test('returns first 20 items if state.page value is 1', () => {
    // Arrange
    const items = Array(22)
    .fill()
    .map((v, i) => i)

    const state = {
        items,
        page: 1
      }

    // Act
    const result = getters.displayItems(state)

    // Assert
    expect(result).toHaveLength(20)
    expect(result).toEqual(items.slice(0, 20))
})

test('returns items 21-40 if state.page value is 2', () => {
    // Arrange
    const items = Array(42)
    .fill()
    .map((v, i) => i)

    const state = {
        items,
        page: 2
      }

    // Act
    const result = getters.displayItems(state)

    // Assert
    expect(result).toHaveLength(20)
    expect(result).toEqual(items.slice(20, 40))
})
