import List from './List.vue'
import { shallowMount } from '@vue/test-utils'

test('renders "no items" if items prop is undefined', () => {
    // Arrange
    const wrapper = shallowMount(List)
    // Act

    // Assert
    expect(wrapper.text()).toContain('No items')

})

test('renders text using each item in items prop array', () => {
    // Arrange
    const wrapper = shallowMount(List, {
        propsData: {
            items: ['item1', 'item2']
        }
    })
    // Act

    // Assert
    expect(wrapper.text()).toContain('item1')
    expect(wrapper.text()).toContain('item2')
})

test('renders text using each item in items prop array - snapshot', () => {
    // Arrange
    const wrapper = shallowMount(List, {
        propsData: {
            items: ['item1', 'item2']
        }
    })

    // Act
    expect(wrapper.element).toMatchSnapshot();
})
