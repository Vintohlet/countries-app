import type { Country } from "../types/Country";

export const fetchCountries = async (): Promise<Country[]> => {
   const res = await fetch(`${import.meta.env.VITE_COUNTRIES_API}/all?fields=name,flags,region,capital,population`);
  if (!res.ok){
    throw new Error("Failed to fetch contries")
  }
  return res.json();
};

