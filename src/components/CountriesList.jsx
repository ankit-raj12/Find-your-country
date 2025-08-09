import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  return (
    <>
    { !countryData.length ? <CountriesListShimmer /> :
      <div className="countries">
      {countryData
        .filter((country) => (country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)))
        .map((country) => {
          return (
            <CountryCard
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              key={country.name.common}
            />
          );
        })}
    </div>}
    </>
  );
}
