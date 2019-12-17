import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Container, Navbar, Nav, NavItem, NavLink, Row, Col } from "reactstrap";

export default function App() {
  return (
    <main>
    <Header />
    <div>
        <Nav tabs>
        <NavItem>
            <NavLink href="/">Home</NavLink> 
        </NavItem>
        <NavItem>
            <NavLink href="/characterlist">Character List</NavLink>
        </NavItem>
      </Nav> 
    </div>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
    </main>  
  );
}
