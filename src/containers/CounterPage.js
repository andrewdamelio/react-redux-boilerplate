import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../reducers/counter';
import Loading from '../components/Loading';
import { showLoadingModal, hideLoadingModal } from '../reducers/loading';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('value'),
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
    showLoadingModal: () => dispatch(showLoadingModal()),
    hideLoadingModal: () => dispatch(hideLoadingModal()),
  };
}

class CounterPage extends Component {

  componentDidMount() {
    const { props } = this;
    props.showLoadingModal();
    setTimeout(() => {
      props.hideLoadingModal();
    }, 500);
  }

  render() {
    const { counter, loading, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <Loading isVisible={ loading } />
        <Counter counter={ counter }
                 increment={ incrementCounter }
                 decrement={ decrementCounter } />
      </div>
    );
  }
}

CounterPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  showLoadingModal: PropTypes.func.isRequired,
  hideLoadingModal: PropTypes.func.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
