import { useState, useMemo, useCallback } from 'react';

type SortDirection = 'asc' | 'desc' | 'none';

interface UseDataTableProps<T> {
  initialData: T[];
  initialSortKey?: keyof T | null;
}

export const useDataTable = <T extends { id: string | number }>({
  initialData,
  initialSortKey = null,
}: UseDataTableProps<T>) => {
  const [data] = useState(initialData);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string | number>>(new Set());
  const [sortKey, setSortKey] = useState<keyof T | null>(initialSortKey);
  const [sortDirection, setSortDirection] = useState<SortDirection>('none');

  const handleSelectAll = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allRowIds = new Set(data.map(row => row.id));
      setSelectedRowIds(allRowIds);
    } else {
      setSelectedRowIds(new Set());
    }
  }, [data]);

  const handleSelectRow = useCallback((rowId: string | number) => {
    const newSelection = new Set(selectedRowIds);
    if (newSelection.has(rowId)) {
      newSelection.delete(rowId);
    } else {
      newSelection.add(rowId);
    }
    setSelectedRowIds(newSelection);
  }, [selectedRowIds]);

  const handleSort = useCallback((key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  }, [sortKey]);

  const sortedData = useMemo(() => {
    if (sortKey && sortDirection !== 'none') {
      return [...data].sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [data, sortKey, sortDirection]);

  return {
    sortedData,
    selectedRowIds,
    sortKey,
    sortDirection,
    handleSelectAll,
    handleSelectRow,
    handleSort,
  };
};