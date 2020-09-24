import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; //importing the app from App.js

test('renders learn react link', () => { // renders app from App.js - this npm test passed
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i); // when we're searching the 'getByText' component it is searching for (/learn react/)
  expect(linkElement).toBeInTheDocument(); // either true or false (true = passed, false = fail)
});

it('renders without crashing', () => { // this npm test failed
  const div = document.createElement('div');
  ReactDOM.render(<App />,div);
  });