import mutations from './mutations'

test('adds filtered items to state', () => {
    // Arrange
    const state = {
        items: []
    }
    const items = [{}, undefined, {}]

    // Act
    mutations.setItems(state, { items })

    // Assert
    expect(state.items).toEqual([{}, {}])
})
