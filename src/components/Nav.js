import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const Nav = ( { location, className = '', style = {} }) => {
  const homeActive = location.pathname === '/';

  return (
    <nav className={`${ className }`}
         style={{ ...styles.base, ...style }}>
        <Link style={{ ...!homeActive ? styles.active  : '' }}
              to="/about">About</Link>

        {' / '}

        <Link style={{ ...homeActive ? styles.active  : '' }}
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
};
