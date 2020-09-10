import React from 'react';
import { Link } from 'react-router-dom';

class Project3 extends React.Component {
  render() {
    return (
      <div className='project'>
        <Link to={'/projects'}>
          <i class='fas fa-long-arrow-alt-left'></i>
        </Link>
        <div className='project__container project3'>
          <p className='project__info'>
            Generador de frases aleatorias de la serie #Luimelia y Amar es para
            siempre.
          </p>
          <div className='project__buttons'>
            <a
              href='https://isabelolivaresr.github.io/luimelia-random-quotes/'
              alt='luimelia random quotes web'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fas fa-globe-europe'></i>
            </a>
            <a
              href='https://github.com/IsabelOlivaresR/luimelia-random-quotes'
              alt='luimelia random quotes repository'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project3;
