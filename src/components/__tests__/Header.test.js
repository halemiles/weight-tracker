import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import Header from '../Header';

describe('Header component', () => {
  test('renders Home and Weights links', () => {
    render(<Header />);

    // Check for the "Home" link
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check for the "Weights" link
    const weightsLink = screen.getByText(/Weights/i);
    expect(weightsLink).toBeInTheDocument();
    expect(weightsLink).toHaveAttribute('href', '/weights');
  });
});
