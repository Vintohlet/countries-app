import type { Country } from "../../types/Country";
import  './CountryDetails.scss'
interface CountryDetailsProps {
  country: Country;
}

export default function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className="details">
      <img src={country.flags.svg} />
      <h2>Detailed information about {country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()} people</p>
    </div>
  );
}
