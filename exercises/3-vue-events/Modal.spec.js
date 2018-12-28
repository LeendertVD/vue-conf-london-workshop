import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

test('emits on-close event when close button is clicked', () => {
    // Arrange
    const wrapper = shallowMount(Modal)

    // Assert
    expect(wrapper.emitted('close-modal')).toBeUndefined()

    // Act
    wrapper.find('button').trigger('click')

    // Assert
    expect(wrapper.emitted('close-modal')).toEqual([[]])
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
})
