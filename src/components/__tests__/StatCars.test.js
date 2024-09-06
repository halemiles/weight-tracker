import React from 'react';
import { render, screen } from '@testing-library/react';
import StatCard from '../StatCard';

describe('StatCard Component', () => {
  test('renders with correct title and value', () => {
    // Mock data for title and value
    const title = "Test Title";
    const value = "Test Value";

    // Render the StatCard component with the props
    render(<StatCard title={title} content={value} />);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);

    // Check if the value is rendered correctly
    const valueElement = screen.getByText(value);
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveTextContent(value);
  });

  test('renders long text for title and value correctly', () => {
    const longTitle = 'This is a very long title to test how the component handles long text';
    const longValue = '12345678901234567890123456789012345678901234567890';

    render(<StatCard title={longTitle} content={longValue} />);

    // Check long title and value are rendered correctly
    const longTitleElement = screen.getByText(longTitle);
    expect(longTitleElement).toBeInTheDocument();
    expect(longTitleElement).toHaveTextContent(longTitle);

    const longValueElement = screen.getByText(longValue);
    expect(longValueElement).toBeInTheDocument();
    expect(longValueElement).toHaveTextContent(longValue);
  });

  test('renders numbers and special characters correctly', () => {
    const numericTitle = '1234';
    const specialValue = '@#$%^&*()!';

    render(<StatCard title={numericTitle} content={specialValue} />);

    const numericTitleElement = screen.getByText(numericTitle);
    expect(numericTitleElement).toBeInTheDocument();
    expect(numericTitleElement).toHaveTextContent(numericTitle);

    const specialValueElement = screen.getByText(specialValue);
    expect(specialValueElement).toBeInTheDocument();
    expect(specialValueElement).toHaveTextContent(specialValue);
  });
});
