


export function CountryItem({country}) {
  return (
    <div className="border rounded p-3 hover:bg-gray-100">
        <h2><span className="font-bold">Name:</span> {country.name}</h2>
        <h3><span className="font-bold">Region:</span> {country.region}</h3>
        <h4><span className="font-bold">Area:</span> {country.area} km<sup>2</sup></h4>
    </div>
  )
}
