import React, { useState } from 'react';
import { Collapse, Carousel, Button } from 'react-bootstrap';
import projetos from '../Db/Projetos';

function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        variant='outline-primary' 
        onClick={() => setOpen(!open)}
        aria-controls='projects-carrousel'
        aria-expanded={open}
        className='show-hide-btn'
        size='lg'
      >
        {open ? 'Esonder Projetos' : 'Mostrar Projetos'}
      </Button>
      <Collapse in={open}>
        <div id='projects-carrousel'>
          <Carousel>
            {projetos.map((projeto, index) => (
              <Carousel.Item key={index}>
              <img
                className='d-block w-100'
                src={projeto.img}
                alt={projeto.name}
              />
              <Carousel.Caption>
                <h3 className='easy-read'>{projeto.name}</h3>
                <p className='easy-read'>{projeto.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Collapse>
    </div>
  );
}

export default Projects;