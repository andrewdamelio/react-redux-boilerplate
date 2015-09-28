import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

@connect(mapState)
class CounterPage extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { counter, dispatch } = this.props;
    return (
      <Counter counter={ counter }
               { ...bindActionCreators(CounterActions, dispatch) } />
    );
  }
}

function mapState(state) {
  return {
    counter: state.counter.get('value'),
  };
}

export default CounterPage;
