import { useListParams } from '../context/ListParams';
import { filters } from '../helpers/filters';

export function FilteringBar() {
  const [listParams, setListParams] = useListParams();
  const { filterKeys } = listParams;

  const setFilter = (filterKey) => {
    setListParams((prev) => {
      const existingFilterIdx = prev.filterKeys.findIndex(
        (filter) => filter === filterKey
      );
      const newFilterKeys = [...prev.filterKeys];
      if (existingFilterIdx !== -1) {
        newFilterKeys.splice(existingFilterIdx, 1);
      } else {
        newFilterKeys.push(filterKey);
      }
      return {
        ...prev,
        filterKeys: newFilterKeys
      };
    });
  };

  return (
    <div className="flex gap-3">
      {Object.keys(filters).map((filterKey) => {
        const isActive = filterKeys.includes(filterKey);
        const activeClass = isActive
          ? 'bg-green-600 text-white'
          : 'bg-gray-300';
        return (
          <button
            onClick={() => setFilter(filterKey)}
            className={`border rounded p-1 ${activeClass}`}
            key={filterKey}>
            {filterKey}
          </button>
        );
      })}
    </div>
  );
}
