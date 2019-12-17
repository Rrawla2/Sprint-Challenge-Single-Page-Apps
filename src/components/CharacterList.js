import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const url="https://rickandmortyapi.com/api/character/";

    axios
      .get(url)
      .then(response => {
        // console.log(response.data.results)
        setCharacter(response.data.results);
        console.log("setCharacter", setCharacter)
      })
      .catch(error => {
        console.log('Data not found', error);
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  //console.log("character", character)
  
  return (
    
    <section className="character-list">
      <h2>Search Characters</h2>
      <SearchForm setSearch={setSearch} />

      {character.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      .map(character => 
        <CharacterCard key={character.id} character={character} />
      )};
      
    
    </section>
  );
}
