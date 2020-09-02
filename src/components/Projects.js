import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <a
          href='http://beta.adalab.es/Project-Promo-J-Modulo-1-Team-6/'
          alt='Adawonder web'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='projects__1'></div>
        </a>
        <a
          href='http://beta.adalab.es/project-promo-j-module-2-team-8-afternoon/'
          alt='Awesome card reader web'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='projects__2'></div>
        </a>
        <a
          href='https://isabelolivaresr.github.io/luimelia-random-quotes/'
          alt='luimelia random quotes web'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='projects__3'></div>
        </a>
        <a
          href='http://beta.adalab.es/project-promo-j-m-3-team-6/'
          alt='Awesome Golden Card Web'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='projects__4'></div>
        </a>
        <a
          href='http://beta.adalab.es/modulo-3-evaluacion-final-IsabelOlivaresR/'
          alt='Rick and Morty character finder web'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='projects__5'></div>
        </a>
      </div>
    );
  }
}

export default Projects;
