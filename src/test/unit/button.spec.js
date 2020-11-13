import { mount } from '@vue/test-utils'
import PhxButton from "../../components/Button";


test('button has label', () => {
    const wrapper = mount(PhxButton,{
        propsData: {
            label: 'foo'
        }
    })
    expect(wrapper.props().label).toBe('foo')
})


