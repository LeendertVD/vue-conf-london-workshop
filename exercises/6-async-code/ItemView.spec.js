import { shallowMount } from '@vue/test-utils'
import ItemView from './ItemView.vue'
import Item from './Item.vue'
import { fetchItems } from './api'
import flushPromises from 'flush-promises'

jest.mock('./api')

test('renders items resolved from fetchItems', async () => {
    // Arrange
    expect.assertions(1)
    const items = [{}, {}]
    fetchItems.mockResolvedValue(items)

    const wrapper = shallowMount(ItemView);

    await flushPromises()
    // Act

    // Assert
    expect(wrapper.findAll(Item)).toHaveLength(2)
})

test('renders error if fetchItems rejects', async () => {
    // Arrange
    expect.assertions(2)
    const items = [{}, {}]
    fetchItems.mockRejectedValue(items)

    const wrapper = shallowMount(ItemView);
    await flushPromises()
    // Act

    // Assert
    expect(wrapper.text()).toContain('Error loading items')
    expect(wrapper.findAll(Item)).toHaveLength(0)
})
