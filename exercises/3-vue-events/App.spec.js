import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Modal from './Modal.vue'

test('removes Modal when close-modal is emitted', () => {
    // Arrange
    const wrapper = shallowMount(App)

    // Act
    wrapper.find(Modal).vm.$emit('close-modal')

    // Assert
    expect(wrapper.vm.$data.showModal).toBe(false)
    expect(wrapper.findAll(Modal)).toHaveLength(0)
    expect(wrapper.find(Modal).exists()).toBe(false)
})
