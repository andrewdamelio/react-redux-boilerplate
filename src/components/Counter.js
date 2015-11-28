import React from 'react';
import Radium from 'radium';


const Counter = ({ counter, increment, decrement }) => {
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
};

export default  Radium(Counter);


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
