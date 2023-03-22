import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import projetos from "../Db/Projetos";

function Projects() {
  return (
    <Carousel>
      {projetos.map((projeto) => (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={projeto.img}
          alt={projeto.name}
          height="300px"
          width=""
        />
        <Carousel.Caption>
          <h3>{projeto.name}</h3>
          <p>{projeto.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Projects;