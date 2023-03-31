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
          <Carousel interval={ null } indicators={ false }>
            {projetos.map(({ img, name, description, repository, page }, index) => (
              <div key={index} className='my-carousel-item'>
                <img
                  className='carousel-img'
                  src={img}
                  alt={name}
                />
                <div className='carousel-infos'>
                  <h3 className='carousel-name'>{name}</h3>
                  <p className='carousel-description'>{description}</p>
                  <div className='buttons-projects'>
                    <Button variant='primary' size='lg' onClick={() => window.open(repository, '_blank')}>
                      Repositório
                    </Button>
                    <Button variant='primary' size='lg' onClick={() => window.open(page, '_blank')}>
                      Página
                    </Button>
                  </div>
                </div>
            </div>
            ))}
          </Carousel>
        </div>
      </Collapse>
    </div>
  );
}

export default Projects;