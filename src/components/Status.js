import React from 'react';
import Radium from 'radium';

const Status = ({ counter }) => {
  const happyOrSad = counter > 0 ? ':)' : ':(';

  let displayColor;
  if (counter < 0) {
    displayColor = 'red';
  } else if (counter > 0) {
    displayColor = 'green';
  } else {
    displayColor = 'black';
  }

  return (
    <h1>
      <div id="status-test-id"
           style={[
             styles[displayColor],
             styles.base,
           ]}>
        { counter === 0 ? ':|' : happyOrSad }
      </div>
    </h1>
  );
};

export default Radium(Status);

const styles = {
  base: {
    fontSize: '3em',
    transform: 'rotate(90deg)',
    marginBottom: '50vh',
    textAlign: 'center',
  },
  red: {
    color: '#FE3232',
  },
  green: {
    color: '#2AFE1B',
  },
  black: {
    color: '#000000',
  },
};
