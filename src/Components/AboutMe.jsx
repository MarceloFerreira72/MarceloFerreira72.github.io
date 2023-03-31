import React from 'react';
import { Image } from 'react-bootstrap';
import Sorrisao from '../Images/Sorrisao.png';

function AboutMe() { 
  return (
    <div className='about-me'>
      <div className='face'>
        <Image roundedCircle src={Sorrisao} alt='foto de perfil'/>
        <p>23 anos Garanhuns PE</p>
        <i/>
      </div>
      <div className='introduction'>
        <h1>
        Hello World!
        <br/>
        Meu nome é Marcelo
        <br/>
        Eu amo desenvolvimento web
        </h1>
        <p className='italic'>Disponível para contratação</p>
        <p>
        Sou uma pessoa sonhadora, e sonho em inspirar outras pessoas assim como meus heróis me inspiram... 
        <br/>
        Por agora, estou a procura de times e líderes inspiradores para que eu possa aprender mais e mais
        </p>
      </div>
    </div>
  );
}

export default AboutMe;