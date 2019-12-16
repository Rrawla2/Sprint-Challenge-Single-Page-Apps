import React from "react";
import { Card, CardBody, CardText, CardImg } from "reactstrap";


export default function CharacterCard(props) {
  console.log(props)
  return (<span>
  <Card>
    <CardBody>{props.character.name}
    <CardText>{props.character.status}</CardText>
    <CardImg src={props.character.image} />
    </CardBody>
  </Card>
  </span>
  )
}
