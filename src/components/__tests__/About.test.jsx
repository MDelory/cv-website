import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';

describe('About component', () => {
  it('renders section title, profile image, and key info cards', () => {
    render(<About />);

    expect(screen.getByText('À propos de moi')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Code Propre')).toBeInTheDocument();
    expect(screen.getByText('Localisation')).toBeInTheDocument();
    expect(screen.getByText('Mobilité')).toBeInTheDocument();

    const img = screen.getByAltText('Martin Delory');
    expect(img).toBeInTheDocument();

    // Verify new position values
    expect(img.style.objectPosition).toBe('center top');
    expect(img.style.transformOrigin).toBe('top center');

    // Trigger image hover handlers for coverage
    fireEvent.mouseEnter(img);
    expect(img.style.transform).toContain('scale(1.10)');
    fireEvent.mouseLeave(img);
    expect(img.style.transform).toContain('scale(1.05)');
  });
});
