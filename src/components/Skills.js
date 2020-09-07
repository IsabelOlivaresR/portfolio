import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <h1 className='aboutMe__title'>Skills</h1>
        <div className='skills__container'>
          <ul className='skills__list'>
            <h2 className='skills__title'>Soft skills</h2>
            <li className='skills__item'>Trabajo en equipo</li>
            <li className='skills__item'>Scrum y Agile</li>
            <li className='skills__item'>Empatía</li>
            <li className='skills__item'>Adaptabilidad</li>
            <li className='skills__item'>Aprendizaje rápido</li>
            <li className='skills__item'>Trabajo en remoto</li>
          </ul>
          <ul className='skills__list'>
            <h2 className='skills__title'>Lenguajes y herramientas</h2>
            <li className='skills__item'>HTML 5</li>
            <li className='skills__item'>CSS3</li>
            <li className='skills__item'>JavaScript</li>
            <li className='skills__item'>React</li>
            <li className='skills__item'>Gulp</li>
            <li className='skills__item'>Node js</li>
            <li className='skills__item'>Git</li>
            <li className='skills__item'>Sass</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
