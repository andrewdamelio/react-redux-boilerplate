import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Loading from '../components/Loading';
import { showLoadingModal } from '../reducers/loading';

const mockData = fromJS([{
  'name': 'React',
}, {
  'name': 'Redux',
}, {
  'name': 'React-Router',
}, {
  'name': 'ImmutableJS',
}, {
  'name': 'Radium',
}, {
  'name': 'Eslint',
}]);

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showLoadingModal: () => dispatch(showLoadingModal()),
  };
}


class AboutPage extends Component {

  componentDidMount() {
    this.props.showLoadingModal();
  }

  render() {
    const rows = mockData.map((data, index) => {
      return (
        <li key={ index }>
          { data.get('name') }
        </li>
      );
    });

    const { loading } = this.props;
    return (
      <div>
        <Loading isVisible={ loading } />
        <h3>React / Redux boilerplate</h3>
        <ul>{ rows }</ul>
      </div>
    );
  }
}

AboutPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  showLoadingModal: PropTypes.func.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
