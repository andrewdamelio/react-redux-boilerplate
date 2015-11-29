import React from 'react';
import { fromJS } from 'immutable';

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


const About = () => {
  const rows = mockData.map((data, index) => {
    return (
      <li key={ index }>
        { data.get('name') }
      </li>
    );
  });

  return (
    <div>
      <h3>React / Redux boilerplate</h3>
      <ul>{ rows }</ul>
    </div>
  );
};

export default About;
