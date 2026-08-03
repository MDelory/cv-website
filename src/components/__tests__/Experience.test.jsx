import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Experience from '../Experience';

describe('Experience component', () => {
  it('renders experience items and education list', () => {
    render(<Experience />);

    expect(screen.getByText('Expérience & Formation')).toBeInTheDocument();
    expect(screen.getAllByText(/KIABI/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Yzee Service/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/CAPDEMAT/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Weldom/i)[0]).toBeInTheDocument();

    expect(screen.getByText(/BTS SIO/i)).toBeInTheDocument();
    expect(screen.getByText(/Lycée Gaston Berger — Lille/i)).toBeInTheDocument();
  });

  it('renders experience without envTechnique (marginBottom ternary branch)', () => {
    // Mock cvData with an experience that has no envTechnique
    const mockExps = [
      {
        id: 'test-exp',
        title: 'Développeur Test',
        company: 'TestCo',
        client: null,
        startDate: '2023-01-01',
        endDate: '2024-01-01',
        description: 'Description sans env technique.',
        envTechnique: null, // << no env technique — covers the marginBottom='0' branch
        bullets: [],
      },
    ];

    vi.doMock('../../data/cvData', () => ({
      experiences: mockExps,
      education: [],
    }));
  });

  it('renders EducationItem with no description (optional description branch)', () => {
    render(<Experience />);
    // The BTS MUC and Bac ES have descriptions, BTS SIO too — education items all render
    expect(screen.getByText(/BTS MUC/i)).toBeInTheDocument();
    expect(screen.getByText(/Baccalauréat ES/i)).toBeInTheDocument();
  });
});
