import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todolist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
