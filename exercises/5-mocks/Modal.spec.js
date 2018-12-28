import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

// Use jest.fn to create a mock function
test('calls onClose when close button is clicked', () => {
    // Arrange
    const mockedCloseEvent = jest.fn();
    const wrapper = shallowMount(Modal, 
        {
            propsData: {
                onClose: mockedCloseEvent
            }
        })
    // Act
    wrapper.find('button').trigger('click')

    // Assert
    expect(mockedCloseEvent).toHaveBeenCalled()
})
