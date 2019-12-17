import React from "react";


export default function SearchForm(props) {
  
  const handleChange = event => {
    props.setSearch(event.target.value)
    
  }
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <section className="search-form">
     <form onSubmit={onSubmit}>
       <input
       name="search"
       placeholder="Search"
       onChange={handleChange}
       />
     </form>

    </section>
  );
}
