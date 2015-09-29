import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

@connect(mapState, mapActions)
export default class CounterApp extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { counter, actions } = this.props;
    return (
      <Counter counter={ counter } { ...actions } />
    );
  }
}

function mapState(state) {
  return {
    counter: state.counter.get('value'),
  };
}

function mapActions(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch),
  };
}
