import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'The label displayed above the input.' },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'ghost'],
      description: 'The visual style of the input.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input field.'
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    loading: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Filled: Story = {
  args: {
    ...Primary.args,
    variant: 'filled',
    label: 'Search',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    invalid: true,
    errorMessage: 'Please enter a valid email address.',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'API Key',
    value: '••••••••••••••••',
    disabled: true,
  },
};

export const Loading: Story = {
    args: {
        label: "Verifying...",
        value: "Checking availability",
        loading: true,
    }
}

export const Large: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'e.g., Jane Doe',
    size: 'lg',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter a strong password',
    helperText: 'Must be at least 8 characters long.',
  },
};