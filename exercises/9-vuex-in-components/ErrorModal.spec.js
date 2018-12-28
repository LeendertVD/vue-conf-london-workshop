import { shallowMount } from '@vue/test-utils'
import ErrorModal from './ErrorModal.vue'

test('adds is-active class when state.error is set', () => {
    // Arrange
    const state = { error: null }
    const wrapper = shallowMount(ErrorModal, {
        mocks: {
            $store: {
                state
            }
        }
    })

    // Assert
    expect(wrapper.classes()).not.toContain('is-active')

    // Act
    state.error = true

    // Assert
    expect(wrapper.classes()).toContain('is-active')
})

test('commits setError with null when close button is clicked', () => {
    // Arrange
    const commit = jest.fn()
    const wrapper = shallowMount(ErrorModal, {
        mocks: {
            $store: {
                state: {
                    error: false
                },
                commit
            }
        }
    })
    
    // Act
    wrapper.find('button').trigger('click')

    // Assert
    expect(commit).toHaveBeenCalledWith('setError', null)
})
