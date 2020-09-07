import React from 'react';
import logo from '../images/LOGO-HEADER.png';
import { Link } from 'react-router-dom';

var mediaqueryList = window.matchMedia('(max-width: 767px)');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getClickFromMenuChild = this.getClickFromMenuChild.bind(this);
  }
  getClickFromMenuChild(ev) {
    this.props.getClickFromMenu(ev);
  }

  render() {
    return (
      <header className='header'>
        <Link to={'/'}>
          <img className='header__logo' src={logo} alt='Isabel Olivares' />
        </Link>
        <nav>
          <ul
            className={
              this.props.isChecked === false && mediaqueryList.matches
                ? 'header__menu hidden'
                : 'header__menu'
            }
          >
            <Link to={'/'}>
              <li>
                <i className='header__menu__icon fas fa-home'></i>
              </li>
            </Link>
            <Link to={'/aboutme'}>
              <li>
                <i className='header__menu__icon fas fa-user'></i>
              </li>
            </Link>
            <Link to={'/projects'}>
              <li>
                <i className='header__menu__icon fas fa-project-diagram'></i>
              </li>
            </Link>
            <Link to={'/skills'}>
              <li>
                <i className='header__menu__icon fas fa-eye'></i>
              </li>
            </Link>
          </ul>
          <i className='fas fa-bars' onClick={this.getClickFromMenuChild}></i>
        </nav>
        <ul className='header__socialMedia'>
          <li>
            <a href='mailto:isabel.olivares6@gmail.com' alt='Email'>
              <i className='header__socialMedia__icon fas fa-envelope-square'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/IsaOlivaresR?s=09' alt='twitter'>
              <i className='header__socialMedia__icon fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/isabelolivaresroldan/'
              alt='LinkedIn'
            >
              <i className='header__socialMedia__icon fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/IsabelOlivaresR' alt='GitHub'>
              <i className='header__socialMedia__icon fab fa-github-square'></i>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
