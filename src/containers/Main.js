import React, { Component } from 'react';
import { List, Map } from 'immutable';

const mockData = List.of(Map({
  'name': 'qui',
  'latitude': 59.033412,
  'longitude': -75.068333,
}), Map({
  'name': 'sxsdd',
  'latitude': 4.83135,
  'longitude': -156.741824,
}), Map({
  'name': 'voluptate',
  'latitude': 24.472219,
  'longitude': 19.625445,
}), Map({
  'name': 'sunt',
  'latitude': -43.128521,
  'longitude': -144.499007,
}), Map({
  'name': 'sit',
  'latitude': -5.065015,
  'longitude': 54.241117,
}), Map({
  'name': 'Lorem',
  'latitude': -8.466637,
  'longitude': 176.177131,
}));


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
