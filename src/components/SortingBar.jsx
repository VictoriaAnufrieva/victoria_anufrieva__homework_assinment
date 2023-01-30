import { useListParams } from '../context/ListParams';

export function SortingBar() {
  const [, setListParams] = useListParams();

  const handleChange = (e) => {
    const [key, order] = e.target.value.split('/');
    setListParams((prev) => ({ ...prev, sort: { key, order: Number(order) } }));
  };

  return (
    <select onChange={handleChange}>
      <option value="name/1">A-Z</option>
      <option value="name/-1">Z-A</option>
      <option value="area/1">Area&lt;</option>
      <option value="area/-1">Area&gt;</option>
    </select>
  );
}
