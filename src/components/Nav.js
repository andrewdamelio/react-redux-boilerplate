import React, { PropTypes } from 'react';
import Radium from 'radium';

const Nav = ( { navigate, location, className = '' }) => {
  const homeActive = location === '/';

  return (
    <nav className={`${ className }`}
         style={ styles.base }>


        <a style={ !homeActive ? styles.active : styles.inactive }
           onClick={ homeActive && navigate.bind(this, '/about') }>About</a>

        {' / '}

        <a style={ homeActive ? styles.active : styles.inactive }
           onClick={ !homeActive && navigate.bind(this, '/') }>Counter</a>
    </nav>
  );
};

Nav.propTypes = {
  location: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Radium(Nav);

const styles = {
  base: {
    userSelect: 'none',
  },
  active: {
    textDecoration: 'none',
    borderBottom: '1px solid rgb(15, 16, 18)',
  },
  inactive: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
};
