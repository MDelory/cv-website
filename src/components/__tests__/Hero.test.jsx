import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';
import { personalInfo } from '../../data/cvData';

describe('Hero component', () => {
  it('renders title, name, description and action elements', () => {
    render(<Hero />);

    expect(screen.getByText(/Martin/i)).toBeInTheDocument();
    expect(screen.getByText(/Delory/i)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.title)).toBeInTheDocument();

    const pdfButton = screen.getAllByRole('button', { name: /télécharger cv/i })[0];
    expect(pdfButton).toBeInTheDocument();

    const scrollLink = screen.getByLabelText(/faire défiler vers le bas/i);
    expect(scrollLink).toHaveAttribute('href', '#about');
  });
});
