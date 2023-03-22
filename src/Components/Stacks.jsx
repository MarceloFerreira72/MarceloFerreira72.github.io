import React from "react";
import stacks from "../Db/Stacks";
import { Figure } from "react-bootstrap";

function Stacks() {
  return (
    <div>
      <h3>habilidades que aprendi e estudo todos os dias:</h3>
      {stacks.map((stack) => (
        <Figure>
        <Figure.Image
          width={50}
          alt={stack.name}
          src={stack.image}
        />
        <Figure.Caption>
          {stack.name}
        </Figure.Caption>
      </Figure>
      ))}
    </div>
  )
}

export default Stacks;