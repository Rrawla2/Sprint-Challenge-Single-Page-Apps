import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Nav, NavLink } from "reactstrap";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/characterlist">Character List</NavLink>
      </Nav>
      <SearchForm />

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
      
    </main>
  );
}
