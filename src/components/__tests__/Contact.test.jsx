import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../Contact';

describe('Contact component', () => {
  it('renders contact details, mailto link, and social links', () => {
    render(<Contact />);

    expect(screen.getByText('Me Contacter')).toBeInTheDocument();
    const mailLink = screen.getByRole('link', { name: /contactez-moi/i });
    expect(mailLink).toHaveAttribute('href', 'mailto:delorymartin@gmail.com');

    const links = screen.getAllByRole('link');
    const githubAnchor = links.find(l => l.getAttribute('href')?.includes('github.com'));
    const linkedinAnchor = links.find(l => l.getAttribute('href')?.includes('linkedin.com'));

    expect(githubAnchor).toBeDefined();
    expect(linkedinAnchor).toBeDefined();

    if (githubAnchor) {
      fireEvent.mouseEnter(githubAnchor);
      expect(githubAnchor.style.color).toBe('var(--color-primary)');
      fireEvent.mouseLeave(githubAnchor);
      expect(githubAnchor.style.color).toBe('var(--color-text-muted)');
    }

    if (linkedinAnchor) {
      fireEvent.mouseEnter(linkedinAnchor);
      expect(linkedinAnchor.style.color).toBe('var(--color-primary)');
      fireEvent.mouseLeave(linkedinAnchor);
      expect(linkedinAnchor.style.color).toBe('var(--color-text-muted)');
    }
  });
});
