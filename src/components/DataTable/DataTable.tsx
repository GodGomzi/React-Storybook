// FILE: src/components/DataTable/DataTable.tsx

// ✅ FIX: Removed unused 'React' import
import clsx from 'clsx';
import { useDataTable } from '../../hooks/useDataTable';

// ... (keep the interface definitions as they were)
interface Column<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
}

const SortArrow = ({ direction }: { direction: 'asc' | 'desc' | 'none' }) => {
  if (direction === 'asc') return <span>🔼</span>;
  if (direction === 'desc') return <span>🔽</span>;
  return <span className="opacity-30">↕️</span>;
};

export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
}: DataTableProps<T>) => {
  const {
    sortedData,
    selectedRowIds,
    sortKey,
    sortDirection,
    handleSelectAll,
    handleSelectRow,
    handleSort,
  } = useDataTable({ initialData: data });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRowIds.size === data.length && data.length > 0}
                  // ✅ FIX: Added accessible label
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map(col => (
              <th key={String(col.key)} scope="col" className="px-6 py-4 font-medium text-gray-900">
                {col.sortable ? (
                  <button onClick={() => handleSort(col.key)} className="flex items-center gap-2">
                    {col.title}
                    <SortArrow direction={sortKey === col.key ? sortDirection : 'none'} />
                  </button>
                ) : (
                  col.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {loading ? (
             Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                {selectable && <td className="px-6 py-4"><div className="h-4 w-4 rounded bg-gray-200" /></td>}
                {columns.map(col => <td key={String(col.key)} className="px-6 py-4"><div className="h-4 w-3/4 rounded bg-gray-200" /></td>)}
              </tr>
            ))
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-10">No data available.</td>
            </tr>
          ) : (
            sortedData.map(row => (
              <tr key={row.id} className={clsx("hover:bg-gray-50", { 'bg-blue-50': selectedRowIds.has(row.id) })}>
                {selectable && (
                  <td className="px-6 py-4">
                    <input 
                      type="checkbox" 
                      checked={selectedRowIds.has(row.id)} 
                      onChange={() => handleSelectRow(row.id)}
                      aria-label={`Select row ${row.id}`}
                    />
                  </td>
                )}
                {columns.map(col => <td key={String(col.key)} className="px-6 py-4">{String(row[col.key])}</td>)}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};