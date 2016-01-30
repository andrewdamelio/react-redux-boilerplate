import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const Nav = ( { location, className = '' }) => {
  const homeActive = location === '/';

  return (
    <nav className={`${ className }`}
         style={ styles.base }>

        <Link style={ !homeActive ? styles.active : styles.inactive }
              to="/about">About</Link>

        {' / '}

        <Link style={ homeActive ? styles.active : styles.inactive }
              to="/">Counter</Link>
    </nav>
  );
};

export default Radium(Nav);

const styles = {
  base: {},
  active: {
    textDecoration: 'underline',

  },
  inactive: {
    textDecoration: 'none',
  },
};
