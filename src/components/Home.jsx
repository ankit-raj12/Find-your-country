import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useTheme } from "../hooks/UseTheme";


export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme()

  return (
    <>
      <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter">
        <SearchBar setQuery={setQuery} />
        <FilterBox setQuery={setQuery}/>
      </div>
        <CountriesList query={query} />
      </main>
    </>
  );
}
