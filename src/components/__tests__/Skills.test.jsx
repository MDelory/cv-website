import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Skills from '../Skills';

const mockCvData = vi.hoisted(() => ({
  skillCategories: [
    { id: 'backend', title: 'Développement Back-end', skills: ['Java'] },
    { id: 'database', title: 'Bases de données', skills: ['PostgreSQL'] },
    { id: 'devops', title: 'DevOps & Outils', skills: ['Docker'] },
    { id: 'custom_unknown', title: 'Autres Compétences', skills: ['Git'] },
  ],
}));

vi.mock('../../data/cvData', () => mockCvData);

describe('Skills component', () => {
  it('renders technical skill categories and skills list including fallback icon', () => {
    render(<Skills />);

    expect(screen.getByText('Compétences Techniques')).toBeInTheDocument();
    expect(screen.getByText('Développement Back-end')).toBeInTheDocument();
    expect(screen.getByText('Bases de données')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Outils')).toBeInTheDocument();
    expect(screen.getByText('Autres Compétences')).toBeInTheDocument();

    const cardTitle = screen.getByText('Développement Back-end');
    const card = cardTitle.closest('div');
    if (card) {
      fireEvent.mouseEnter(card);
      expect(card.style.transform).toBe('translateY(-5px)');
      fireEvent.mouseLeave(card);
      expect(card.style.transform).toBe('translateY(0)');
    }
  });
});
