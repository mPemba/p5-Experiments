import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders P5 Experiments header', () => {
  render(<App />);
  const linkElement = screen.getByText(/P5 Experiments/i);
  expect(linkElement).toBeInTheDocument();
});
