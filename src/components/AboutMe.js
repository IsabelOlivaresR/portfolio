import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutMe'>
        <h1 className='aboutMe__title'>Sobre mí</h1>
        <div className='aboutMe__img' />
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
        <ul className='aboutMe__socialMedia'>
          <li>
            <a
              href='mailto:isabel.olivares6@gmail.com'
              alt='Email'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='header__socialMedia__icon fas fa-envelope-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/IsaOlivaresR?s=09'
              alt='twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='header__socialMedia__icon fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/isabelolivaresroldan/'
              alt='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='header__socialMedia__icon fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/IsabelOlivaresR'
              alt='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='header__socialMedia__icon fab fa-github-square'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
