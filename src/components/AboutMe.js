import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutMe'>
        <h1 className='aboutMe__title'>Sobre mí</h1>
        <p className='aboutMe__info'>
          Desarrolladora creativa con muchas ganas de integrarse y crecer dentro
          del mundo tecnológico.
        </p>
        <p className='aboutMe__info'>
          Tengo una amplía experiencia en atención al público en distintos
          ámbitos laborales y con personas muy diferentes, que junto con mi
          personalidad empática por naturaleza hace que me sea muy fácil ponerme
          en el lugar del otro y entender las necesidades de los clientes y de
          mis compañeros de trabajo.
        </p>
        <p className='aboutMe__info'>
          Estoy acostumbrada a trabajar en ambientes multiculturales y tengo una
          gran capacidad de aprendizaje y de adaptación a las distintas
          circunstancias que puedan originarse.
        </p>
      </div>
    );
  }
}

export default AboutMe;
