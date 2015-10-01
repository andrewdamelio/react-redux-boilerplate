import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  static defaultProps = {
    counter: 0,
  }

  render() {
    const { counter, increment, decrement } = this.props;
    const displayColor = counter >= 0 ? 'green' : 'red';
    return (
      <div style={ styles.counter }>
        <h1>
          <div id="status-test-id"
               style={[
                 styles[displayColor],
                 styles.rotate,
               ]}>
            { counter >= 0 ? ':)' : ':(' }
          </div>
        </h1>

        <button onClick={ increment }>Increment</button>
        { ' ' + counter + ' ' }
        <button onClick={ decrement }>Decrement</button>

      </div>
    );
  }
}

const styles = {
  counter: {
    textAlign: 'center',
  },
  rotate: {
    transform: 'rotate(90deg)',
  },
  red: {
    color: '#FE3232',
  },
  green: {
    color: '#2AFE1B',
  },
};
