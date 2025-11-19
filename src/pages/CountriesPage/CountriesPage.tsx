import { useEffect,  useRef, useState } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import type { Country } from "../../types/Country";
import SearchBar from "../../components/SearchBar/SearchBar";
import RegionSelect from "../../components/RegionSelect/RegionSelect";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import "./CountriesPage.scss";
import { fetchCountries } from "../../api/countries";
export default function CountriesPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  
  
  const filteredCountries = countries.filter((country) => {
      const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;
      const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
    useEffect(() => {
  if (selectedCountry && detailsRef.current) {
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 150);
  }
}, [selectedCountry]);
    
  return (
    <div className="wrapper">
      <div className="menu">
        <SearchBar setSearchQuery={setSearchQuery} />
        <RegionSelect onRegionChange={setSelectedRegion} />
      </div>
      <div className="countries">
        {filteredCountries.length === 0 ? (
          <h3 className="no-results">No countries found...</h3>
        ) : (
          filteredCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onSelect={() => setSelectedCountry(country)}
            />
          ))
        )}
      </div>
      {selectedCountry &&
        filteredCountries.some(
          (c) => c.name.common === selectedCountry.name.common
        ) && (
          <div ref={detailsRef}>
            {<CountryDetails country={selectedCountry} />}
          </div>
        )}
    </div>
  );
}
