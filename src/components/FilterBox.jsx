export default function FilterBox({setQuery}) {
  
  return (
    <select className="filter" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
      <option hidden>Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
