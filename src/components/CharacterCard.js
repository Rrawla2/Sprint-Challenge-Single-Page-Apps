import React from "react";
import { Card, CardText, CardImg, CardTitle, CardBody, Row, Col } from "reactstrap";


export default function CharacterCard({ character }) {
  
  return (
  <span className="card">
  
    <Card className="character-card">
      <CardImg className="cardimg" src={character.image} />
        <CardBody>
          <CardTitle className="name">{character.name}</CardTitle><br />
            <CardText>
            Species: {character.species}
            <br />
            Gender: {character.gender}
            </CardText>
        </CardBody>
    </Card>

  </span>
  )
}
