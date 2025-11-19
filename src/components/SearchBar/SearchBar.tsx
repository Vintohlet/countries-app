import React, { useState } from "react";
import "./SearchBar.modules.scss"
interface SearchBarProps {
  setSearchQuery: (country: string) => void;
}
export default function SearchBar({setSearchQuery}: SearchBarProps){
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key =='Enter'){
        setSearchQuery(inputValue)
    }
  }

    const handleSearch = () =>{
        setSearchQuery(inputValue)
    }
    return(
        <div className="search">
            <input type="text" placeholder="Search countries..." onChange={handleChange} onKeyDown={handleKeyDown}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}