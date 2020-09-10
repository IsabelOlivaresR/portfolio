import React from 'react';
import { Link } from 'react-router-dom';

class Project5 extends React.Component {
  render() {
    return (
      <div className='project'>
        <Link to={'/projects'}>
          <i class='fas fa-long-arrow-alt-left'></i>
        </Link>
        <div className='project__container project5'>
          <p className='project__info'>
            Buscador y filtro de personajes de la serie Rick and Morty.
          </p>
          <div className='project__buttons'>
            <a
              href='http://beta.adalab.es/modulo-3-evaluacion-final-IsabelOlivaresR/'
              alt='Rick and Morty character finder web'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fas fa-globe-europe'></i>
            </a>
            <a
              href='https://github.com/Adalab/modulo-3-evaluacion-final-IsabelOlivaresR'
              alt='Rick and Morty character finder repository'
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

export default Project5;
