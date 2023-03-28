import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import projetos from "../Db/Projetos";

function Projects() {
  const [open, setOpen] = useState(false)



  return (
    <div>
      <button 
        onClick={() => setOpen(!open)}
        aria-controls="projects-carrousel"
        aria-expanded={open}
      >
        {open ? 'Esonder Projetos' : 'Mostrar Projetos'}
      </button>
      <Collapse in={open}>
        <div id="projects-carrousel">
          <Carousel>
            {projetos.map((projeto, index) => (
              <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={projeto.img}
                alt={projeto.name}
                height="50%"
              />
              <Carousel.Caption>
                <h3>{projeto.name}</h3>
                <p>{projeto.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Collapse>
    </div>
  )
}

export default Projects;