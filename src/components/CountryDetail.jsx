import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState({});
  const [notFound, setnotFound] = useState(false);

  const [isDark] = useTheme()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativename: Object.values(data.name.nativeName || data.name)[0]?.common,
          flag: data.flags.svg,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          capital: Object.values(data.capital || {}).join(", "),
          subregion: data.subregion,
          currencies: Object.values(data.currencies || {})
            .map((currency) => currency.name )
            .join(", "),
          tld: data.tld,
          languages: Object.values(data.languages || {}).join(", "),
          borders: [],
        });

        if(!data.borders){
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountries]) => borderCountries.name.common);
          })).then((borders) => {
            setCountryData((prevState) => ({...prevState , borders}))
          })
      
      })
      .catch(() => {
        setnotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found!!!</div>;
  }

  return (
    <div className={`container ${isDark ? 'dark' : ''}`}>
      <span onClick={() => window.history.back()} className="back">
        Back
      </span>
      <div className="details">
        <div className="flag">
          <img src={countryData.flag} alt="" />
        </div>
        <div className="informations">
          <div className="title">
            <h1>{countryData.name}</h1>
          </div>
          <div className="info">
            <div className="native-name same">
              <b>Native Name</b>: <p>{countryData.nativename || countryData.name}</p>
            </div>
            <div className="population same">
              <b>Population</b>: <p>{countryData.population}</p>
            </div>
            <div className="region same">
              <b>Region</b>: <p>{countryData.region}</p>
            </div>
            <div className="sub-region same">
              <b>Sub Region</b>: <p>{countryData.subregion}</p>
            </div>
            <div className="capital same">
              <b>Capital</b>: <p>{countryData.capital }</p>
            </div>
            <div className="top-level-domain same">
              <b>Top Level Domain</b>:<p>{countryData.tld}</p>
            </div>
            <div className="currencies same">
              <b>Currencies</b>: <p>{countryData.currencies}</p>
            </div>
            <div className="languages same">
              <b>Languages</b>: <p>{countryData.languages}</p>
            </div>
            <div className="border-countries">
              <p>
                <b>Border Countries:</b>
              </p>
              <div className="links">
                {countryData.borders?.length > 0 ? (
                  countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))
                ) : (
                  <span>No border countries</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
