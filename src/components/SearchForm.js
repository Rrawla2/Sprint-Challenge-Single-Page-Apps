import React, { useState, useEffect } from "react";


export default function SearchForm() {
  const [search, setSearch] = useState("");

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

    </section>
  );
}
