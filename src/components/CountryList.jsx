import { useState, useEffect } from 'react';
import { useListParams } from '../context/ListParams';
import { filters } from '../helpers/filters';

import { CountryItem } from './CountryItem';

const nextLimit = 10;

export function CountryList() {
  const [countries, setCountries] = useState([]);
  const [limit, setLimit] = useState(nextLimit);
  const [listParams] = useListParams();
  const { sort, filterKeys } = listParams;

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,area')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        alert('Getting county list error. Try again later.');
        console.warn(error);
      });
  }, []);

  const showMore = () => {
    setLimit((prev) => prev + nextLimit);
  };

  const filteredCountries = countries
    .sort(
      (a, b) =>
        String(a[sort.key]).localeCompare(String(b[sort.key]), undefined, {
          numeric: true
        }) * sort.order
    )
    .filter((country) => {
      return filterKeys.every((filterKey) => filters[filterKey](country));
    });

  return (
    <div className="flex flex-col gap-3 pb-5">
      {filteredCountries.slice(0, limit).map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
      {limit < filteredCountries.length && (
        <button
          onClick={showMore}
          className="p-1 rounded bg-green-600 text-white rounded">
          Show more
        </button>
      )}
    </div>
  );
}
