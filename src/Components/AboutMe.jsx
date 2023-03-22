import React from "react";
import Sorrisao from '../Images/Sorrisao.png'
import { Image } from "react-bootstrap";

function AboutMe() { 
  return (
    <div>
      <div>
        <Image roundedCircle src={Sorrisao} alt="foto de perfil" width="150px"/>
        <p>23 anos Garanhuns PE</p>
        <i/>
      </div>
      <div>
        <h1>
        Hello World
        <br/>
        Meu nome é Marcelo
        <br/>
        Eu amo desenvolvimento Web
        </h1>
        <p>Disponível para contratação</p>
        <p>
        Sou uma pessoa sonhadora, e sonho em inspirar outras pessoas assim como meus heróis me inspiram... 
        <br/>
        Por agora, estou a procura de times e líderes inspiradores para que eu possa aprender mais e mais
        </p>
      </div>
    </div>
  )
}

export default AboutMe;