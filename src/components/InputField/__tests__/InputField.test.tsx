import { render, screen } from '@testing-library/react';
import { InputField } from '../InputField';
import { describe, it, expect } from 'vitest';

describe('InputField', () => {
  it('renders the input field with a label', () => {
    render(<InputField label="Username" />);
    const labelElement = screen.getByText(/Username/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('displays an error message when invalid', () => {
    render(<InputField label="Email" invalid errorMessage="Enter a valid email" />);
    const errorMessageElement = screen.getByText(/Enter a valid email/i);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('text-red-500');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<InputField label="API Key" disabled />);
    const inputElement = screen.getByLabelText(/API Key/i);
    expect(inputElement).toBeDisabled();
  });
});