import { shallowMount } from '@vue/test-utils'
import SubmitForm from './SubmitForm.vue'

test('calls onSubmit with value of input when form is submitted', () => {
    // Arrange
    const mockedSubmitEvent = jest.fn();
    const wrapper = shallowMount(SubmitForm, 
        {
            propsData: {
                onSubmit: mockedSubmitEvent
            }
        })
    wrapper.find('[type="text"]').element.value = 'Teddy'
    wrapper.find('[type="text"]').trigger('input')

    wrapper.find('[type="text"]').setValue('Test')

    wrapper.vm.$data.username = 'Eddy'
    
    // Act
    wrapper.find('[type="submit"]').trigger('submit')

    // Assert
    expect(mockedSubmitEvent).toHaveBeenCalledWith('Eddy')
})
