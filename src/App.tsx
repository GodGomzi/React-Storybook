
import { useState } from 'react';
import { InputField } from './components/InputField';
import { DataTable } from './components/DataTable';

type TableDataType = {
  id: number;
  name: string;
  age: number;
  city: string;
};

function App() {
  const [inputValue, setInputValue] = useState('');

  const tableColumns: { key: keyof TableDataType; title: string; sortable?: boolean }[] = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'age', title: 'Age', sortable: true },
    { key: 'city', title: 'City' },
  ];

  const tableData: TableDataType[] = [
    { id: 1, name: 'Alice', age: 28, city: 'New York' },
    { id: 2, name: 'Bob', age: 32, city: 'Chicago' },
    { id: 3, name: 'Charlie', age: 24, city: 'Los Angeles' },
  ];

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Component Demo</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">InputField Component</h2>
        <div className="space-y-6 max-w-sm">
          <InputField 
            label="Your Name"
            placeholder="e.g., Jane Doe"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
          <InputField 
            label="Email Address"
            placeholder="you@example.com"
            variant="filled"
            helperText="We'll never share your email."
          />
          <InputField 
            label="Password"
            placeholder="Enter a secure password"
            variant="outlined"
            errorMessage="Password is too short."
            invalid
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">DataTable Component</h2>
        <DataTable
          columns={tableColumns}
          data={tableData}
          selectable
        />
      </section>
    </div>
  );
}

export default App;