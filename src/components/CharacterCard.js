import React from "react";
import { Card, CardText, CardImg, CardTitle } from "reactstrap";


export default function CharacterCard(props) {
  console.log(props)
  return (<span className="card">
  <Card className="character-card">
    <CardImg className="cardimg" src={props.character.image} />
    <CardTitle className="name">{props.character.name}</CardTitle>
    <CardText className="name">Species: {props.character.species}  Gender: {props.character.gender}</CardText>
    
  </Card>
  </span>
  )
}
