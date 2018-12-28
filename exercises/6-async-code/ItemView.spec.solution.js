import { shallowMount } from '@vue/test-utils'
import ItemView from './ItemView.vue'
import Item from './Item.vue'
import { fetchItems } from './api'
import flushPromises from 'flush-promises'

jest.mock('./api')

test('renders items resolved from fetchItems', async () => {
  const items = [{}, {}, {}]
  fetchItems.mockResolvedValue(items)
  const wrapper = shallowMount(ItemView)

  await flushPromises()

  expect(wrapper.findAll(Item)).toHaveLength(3)
})

test('renders error if fetchItems rejects', async () => {
  fetchItems.mockRejectedValue()
  const wrapper = shallowMount(ItemView)

  await flushPromises()

  expect(wrapper.text()).toContain('Error loading items')
})
