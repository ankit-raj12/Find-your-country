import { Link } from "react-router-dom";

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <Link className="country-card" to={`/${name}`}>
      <div className="flag-container">
      <img src={flag} alt="" />
      </div>
      <h5 className="country-name">{name}</h5>
      <p className="population">
        <b>Population</b>: {population}
      </p>
      <p className="region">
        <b>Region</b>: {region}
      </p>
      <p className="capital">
        <b>Capital</b>: {capital}
      </p>
    </Link>
  );
}
