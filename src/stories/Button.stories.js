import PhxButton from '../components/Button.vue';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'general/Button',
  component: PhxButton,
  decorators: [withTests({ results })],
  argTypes: {
    type: { control: { type: 'select', options: ['primary', 'danger', 'warning', 'info'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    icon_position: { control: { type: 'select', options: ['left', 'right'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PhxButton },
  template: '<phx-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  icon: 'fas fa-plus'
};

Primary.parameters = {
  jest: ['button.spec.js'],
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  type: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  type: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  label: 'Button',
  type: 'info'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large'
};


export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  icon: 'far fa-smile-beam',
  icon_position: 'left',
  size: 'large'
};