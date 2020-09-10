import React from 'react';
import { Link } from 'react-router-dom';

class Project2 extends React.Component {
  render() {
    return (
      <div className='project'>
        <Link to={'/projects'}>
          <i class='fas fa-long-arrow-alt-left'></i>
        </Link>
        <div className='project__container project2'>
          <p className='project__info'>
            App Web que permite la creación de tarjetas de presentación de
            manera interactiva.
          </p>
          <div className='project__buttons'>
            <a
              href='http://beta.adalab.es/project-promo-j-module-2-team-8-afternoon/'
              alt='Awesome card reader web'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fas fa-globe-europe'></i>
            </a>
            <a
              href='https://github.com/Adalab/project-promo-j-module-2-team-8-afternoon'
              alt='Awesome card reader repository'
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

export default Project2;
