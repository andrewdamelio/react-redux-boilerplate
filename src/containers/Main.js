import React, { Component } from 'react';
import { fromJS } from 'immutable';

const mockData = fromJS([{
  'name': 'qui',
  'latitude': 59.033412,
  'longitude': -75.068333,
}, {
  'name': 'sxsdd',
  'latitude': 4.83135,
  'longitude': -156.741824,
}, {
  'name': 'voluptate',
  'latitude': 24.472219,
  'longitude': 19.625445,
}, {
  'name': 'sunt',
  'latitude': -43.128521,
  'longitude': -144.499007,
}, {
  'name': 'sit',
  'latitude': -5.065015,
  'longitude': 54.241117,
}, {
  'name': 'Lorem',
  'latitude': -8.466637,
  'longitude': 176.177131,
}]);


export default class Main extends Component {
  render() {
    const rows = mockData.toJS().map((data, index) => {
      return (
        <li key={ index }>
          <button>{ data.name }</button>
        </li>
      );
    });

    return (
      <div>
        <h3>React / Redux boilerplate</h3>
        <ul>{ rows }</ul>
      </div>
    );
  }
}
