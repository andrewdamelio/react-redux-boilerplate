import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('value'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
  };
}

class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
  };

  render() {
    const { counter, incrementCounter, decrementCounter } = this.props;
    return (
      <Counter counter={ counter }
               increment={ incrementCounter }
               decrement={ decrementCounter } />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
