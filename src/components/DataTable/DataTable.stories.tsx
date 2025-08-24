import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  age: number;
}
const columns: { key: keyof UserData; title: string; sortable?: boolean }[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'role', title: 'Role' },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];

const data: UserData[] = [
  { id: 1, name: 'John Doe', role: 'Admin', email: 'john.doe@example.com', age: 34 },
  { id: 2, name: 'Jane Smith', role: 'Developer', email: 'jane.smith@example.com', age: 28 },
  { id: 3, name: 'Sam Green', role: 'Designer', email: 'sam.green@example.com', age: 45 },
  { id: 4, name: 'Alice Brown', role: 'Manager', email: 'alice.brown@example.com', age: 41 },
];

const meta: Meta<typeof DataTable<UserData>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
    data: { control: false },
    columns: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: columns,
    data: data,
  },
};

export const Selectable: Story = {
  args: {
    ...Primary.args,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    columns: columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: columns,
    data: [],
  },
};

export const Sorted: Story = {
  args: {
    ...Primary.args,
    data: [...data].sort((a, b) => b.age - a.age),
  },
};