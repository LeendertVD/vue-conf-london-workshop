import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Menu from './Menu.vue'

test('renders router-link to /login page when signedIn is false', () => {
    // Arrange
    const wrapper = shallowMount(Menu, {
        stubs: {
          'router-link': RouterLinkStub
        }, propsData: {
            signedIn: false
        }
      })

    // Act

    // Assert
    expect(wrapper.text()).toContain('Sign in');
    expect(wrapper.find(RouterLinkStub).props('to')).toBe('/login');

})

test('renders <a> that signs user out if signedIn is true', () => {
    // Arrange
    const wrapper = shallowMount(Menu, {
        stubs: {
          'router-link': RouterLinkStub
        }, propsData: {
            signedIn: true
        }
      })

    // Act

    // Assert
    expect(wrapper.text()).toContain('Sign out');
    expect(wrapper.findAll(RouterLinkStub)).toHaveLength(0);
})
