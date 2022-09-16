import { Meta, Story } from '@storybook/react';

import { Button } from '../components';
import "../tailwind.css"

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: Story<any> = (args) => <Button {...args}></Button>;

export const Standard = Template.bind({});
Standard.args = {
  label: 'This is a button',
}
