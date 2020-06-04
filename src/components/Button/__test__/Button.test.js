import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from '../Button';

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div)
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button title="Click Me" />)
  expect(getByTestId('button').textContent).toBe("Click Me")
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button title="Save" />)
  expect(getByTestId('button').textContent).toBe("Save")
})

it("matches snapshot", () => {
  const snap = renderer.create(<Button title="Click Button" />).toJSON();
  expect(snap).toMatchSnapshot();
})
