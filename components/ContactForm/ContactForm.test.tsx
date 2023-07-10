import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm component', () => {
  it('has correct email input', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('name', 'email');
  });
});
