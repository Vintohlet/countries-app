import type { Country } from "../../types/Country";
import styles from './CountryCard.module.scss'

interface CountryCardProps{
country: Country;
  onSelect: (country: Country) => void;
}

export default function CountryCard({country, onSelect}: CountryCardProps){
    return(
        <div className={styles.card}>
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
           <button onClick={()=>onSelect(country) }>More</button>
        </div>
    )
}