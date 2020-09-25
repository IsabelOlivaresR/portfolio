import React from 'react';
import { Link } from 'react-router-dom';

class Project4 extends React.Component {
  render() {
    return (
      <div className='project'>
        <Link to={'/projects'}>
          <i class='fas fa-long-arrow-alt-left'></i>
        </Link>
        <div className='project__container project4'>
          <p className='project__info'>
            Refactorización y mejora de un proyecto de código heredado a React.
          </p>
          <div className='project__buttons'>
            <a
              href='http://beta.adalab.es/project-promo-j-m-3-team-6/'
              alt='Awesome Golden Card Web'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='project__icon fas fa-globe-europe'></i>
            </a>
            <a
              href='https://github.com/IsabelOlivaresR/refactoring-golden-awesome-cards'
              alt='Awesome Golden Card repository'
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

export default Project4;
