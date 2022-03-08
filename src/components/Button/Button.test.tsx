import React from 'react';
import ReactDOM from 'react-dom';
import { Default } from './Button.stories';

describe('Default button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Default label="primary" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
