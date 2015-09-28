import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

@Radium
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    // Injected by React Router
    const { children } = this.props;

    return (
      <div style={ styles.flexContainer }>
        <div>
          <nav style={ styles.nav }>
            <Link to="/">Home</Link>{'/'}
            <Link to="/counter">Counter</Link>
          </nav>
          <img src="./src/assets/background.png" />
        </div>
        <div style={ styles.container }>
          { children }
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    padding: '20px',
    width: '100%',
  },
  nav: {
    position: 'absolute',
    right: '0%',
    bottom: '0px',
    padding: '10px',
  },
};
