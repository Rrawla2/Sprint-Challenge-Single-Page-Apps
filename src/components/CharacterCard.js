import React from "react";
import { Card, CardText, CardImg, CardTitle } from "reactstrap";


export default function CharacterCard({ character }) {
  
  return (<span className="card">
  <Card className="character-card">
    <CardImg className="cardimg" src={character.image} />
    <CardTitle className="name">{character.name}</CardTitle>
    <CardText className="name">Species: {character.species}  Gender: {character.gender}</CardText>
    
  </Card>
  </span>
  )
}
