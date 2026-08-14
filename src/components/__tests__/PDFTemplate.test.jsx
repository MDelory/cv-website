import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PDFTemplate from '../PDFTemplate';

describe('PDFTemplate component', () => {
  it('renders hidden printable template with cv data', () => {
    const { container } = render(<PDFTemplate />);

    const template = container.querySelector('#cv-pdf-template');
    expect(template).toBeInTheDocument();
    expect(screen.getByText('PROFIL PROFESSIONNEL')).toBeInTheDocument();
    expect(screen.getByText('Compétences Techniques')).toBeInTheDocument();
    expect(screen.getByText('Expériences Professionnelles')).toBeInTheDocument();
    expect(screen.getByText('Formation')).toBeInTheDocument();
    expect(screen.getByText('Projets Personnels / Side Projects')).toBeInTheDocument();
    expect(screen.getByText('Loisirs')).toBeInTheDocument();
  });


  it('renders metaStr with company + client when exp.client exists (true-branch)', () => {
    render(<PDFTemplate />);
    // NTICO — Mission Client : KIABI — text is split across nodes, use custom matcher
    const metaDiv = screen.getAllByText((content, element) => {
      return element?.tagName !== 'SCRIPT' && content.includes('Mission Client') && content.includes('KIABI');
    });
    expect(metaDiv.length).toBeGreaterThan(0);
  });

  it('renders stage experiences section (Norauto & Bailly) in 2-column section', () => {
    render(<PDFTemplate />);
    // Norauto and Bailly appear in the stage section at the bottom
    // Their titles are "Développeur Stagiaire" (appears twice) — or match company name
    // Company names
    expect(
      screen.getAllByText((content) => content.includes('Norauto')).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText((content) => content.includes('Bailly')).length
    ).toBeGreaterThan(0);
  });

  it('renders side projects in PDF template', () => {
    render(<PDFTemplate />);
    expect(screen.getByText('Projets Personnels / Side Projects')).toBeInTheDocument();
    expect(screen.getAllByText('docGenerator')[0]).toBeInTheDocument();
    expect(screen.getAllByText('BriefMe')[0]).toBeInTheDocument();
  });

});

