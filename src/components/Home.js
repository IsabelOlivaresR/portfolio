import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='main__introduction'>
          <p>Hola, soy Isabel</p>
          <p>Soy desarrolladora web.</p>
          <Link to={'/aboutme'}>
            <p className='main__introduction__contact'>CONÓCEME</p>{' '}
          </Link>
        </div>
        <div className='main__logo'></div>
      </div>
    );
  }
}

export default Home;
