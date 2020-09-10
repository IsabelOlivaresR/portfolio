import React from 'react';
import { Link } from 'react-router-dom';

class Project1 extends React.Component {
  render() {
    return (
      <div className='project'>
        <Link to={'/projects'}>
          <i class='fas fa-long-arrow-alt-left'></i>
        </Link>
        <div className='project__container project1'>
          <p className='project__info'>
            Web grupal responsive para presentar a las componentes del equipo.
          </p>
          <div className='project__buttons'>
            <a
              href='http://beta.adalab.es/Project-Promo-J-Modulo-1-Team-6/'
              alt='Adawonder web'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fas fa-globe-europe'></i>
            </a>
            <a
              href='https://github.com/Adalab/Project-Promo-J-Modulo-1-Team-6'
              alt='Adawonder repository'
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

export default Project1;
