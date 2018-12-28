import { shallowMount } from '@vue/test-utils'
import ErrorModal from './ErrorModal.vue'

test('adds is-active class when state.error is set', () => {
  const state = { error: null }
  const wrapper = shallowMount(ErrorModal, {
    mocks: {
      $store: {
        state
      }
    }
  })

  expect(wrapper.classes()).not.toContain('is-active')

  state.error = 'Some error'

  expect(wrapper.classes()).toContain('is-active')
})

test('commits setError with null when close button is clicked', () => {
  const commit = jest.fn()
  const wrapper = shallowMount(ErrorModal, {
    mocks: {
      $store: {
        state: {},
        commit
      }
    }
  })

  wrapper.find('[aria-label="close"]').trigger('click')

  expect(commit).toHaveBeenLastCalledWith('setError', null)
})
