import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  console.log("search", search)
  const [searchResults, setSearchResults] = useState(search);

  useEffect(() => {
      const results = search.filter(character => {
        return character.toLowerCase().includes(search.toLowerCase());
      })
      setSearchResults(results);
  }, [search]);

  const handleChange = event => {
    setSearch(event.target.value);
  }

  return (
    <section className="search-form">
     <form>
       <input
       name="name"
       type="text"
       placeholder="Search"
       onChange={handleChange}

       />
     </form>
     <div>

         {searchResults.map(character => {
           return <div key={character}>{character}</div>
         })}

     </div>
    </section>
  );
}
