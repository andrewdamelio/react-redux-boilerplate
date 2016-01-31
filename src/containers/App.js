import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Radium from 'radium';
import Nav from '../components/Nav';

function mapStateToProps(state) {
  return {
    location: state.routing.location.pathname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route)),
  };
}

class App extends Component {

  render() {
    const { props } = this;
    return (
      <div className="flex flex-row">

        <Nav className="absolute bottom-0 right-0 p2"
             location={ props.location }
             navigate={ props.navigate } />

        <img style={ styles.background }
             src="./src/assets/background.png" />

        <div className="p2" style={ styles.container }>
          { props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(App));


const styles = {
  background: {
    width: '75%',
    height: '100vh',
  },
  container: {
    width: '25%',
  },
};
