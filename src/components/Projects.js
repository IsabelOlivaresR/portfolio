import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <h1 className='aboutMe__title'>Proyectos</h1>
        <Link to={'/project1'}>
          <div className='projects__1'></div>
        </Link>
        <Link to={'/project2'}>
          <div className='projects__2'></div>
        </Link>
        <Link to={'/project3'}>
          <div className='projects__3'></div>
        </Link>
        <Link to={'/project4'}>
          <div className='projects__4'></div>
        </Link>
        <Link to={'/project5'}>
          <div className='projects__5'></div>
        </Link>
      </div>
    );
  }
}

export default Projects;
