import ProgressBar from './ProgressBar.vue'
import { shallowMount } from '@vue/test-utils'


test('increments width by 1% every 100ms', () => {
    // Arrange
    jest.useFakeTimers()
    const wrapper = shallowMount(ProgressBar)
    
    // Act
    jest.advanceTimersByTime(100)

    // Assert
    expect(wrapper.element.style.width).toBe('1%')
    expect(wrapper.vm.$data.percent).toBe(1)
    
    // Act
    jest.advanceTimersByTime(100)

    // Act and Assert
    expect(wrapper.element.style.width).toBe('2%')
    expect(wrapper.vm.$data.percent).toBe(2)
})
