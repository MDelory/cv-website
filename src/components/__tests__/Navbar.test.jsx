import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  beforeEach(() => {
    window.scrollY = 0;
    document.body.style.overflow = '';
    // Reset IntersectionObserver instances between tests
    window.IntersectionObserver.instances = [];
  });

  it('renders logo and desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('MD')).toBeInTheDocument();
    expect(screen.getAllByText('Accueil')[0]).toBeInTheDocument();
    expect(screen.getAllByText('À propos')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Expérience')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Compétences')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
  });

  it('updates scrolled class on window scroll', () => {
    const { container } = render(<Navbar />);
    const header = container.querySelector('header');
    expect(header).not.toHaveClass('navbar-scrolled');

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header).toHaveClass('navbar-scrolled');

    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header).not.toHaveClass('navbar-scrolled');
  });

  it('marks active section when IntersectionObserver fires with isIntersecting=true', () => {
    render(<Navbar />);

    const observer = window.IntersectionObserver.instances[0];
    expect(observer).toBeDefined();

    act(() => {
      // Simulate the "about" section entering viewport
      observer.callback([
        {
          isIntersecting: true,
          target: { id: 'about' },
        },
      ]);
    });

    // The "À propos" desktop link should now have active class
    const desktopLinks = screen.getAllByText('À propos');
    expect(desktopLinks[0].closest('a')).toHaveClass('active');
  });

  it('does not change active section when isIntersecting is false', () => {
    render(<Navbar />);
    const observer = window.IntersectionObserver.instances[0];

    act(() => {
      observer.callback([
        { isIntersecting: false, target: { id: 'about' } },
      ]);
    });

    // Active section should still be 'home' (default)
    const homeLinks = screen.getAllByText('Accueil');
    expect(homeLinks[0].closest('a')).toHaveClass('active');
  });

  it('toggles mobile menu on button click and locks body scroll', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');
    expect(document.body.style.overflow).toBe('hidden');

    // Click mobile nav link
    const mobileAboutLink = screen.getAllByText('À propos')[1];
    fireEvent.click(mobileAboutLink);
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
    expect(document.body.style.overflow).toBe('');
  });

  it('closes mobile menu on Escape key press', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
  });

  it('does not close mobile menu when Escape is pressed while menu is already closed', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    // Menu is closed, press Escape — should be a no-op
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
  });

  it('closes mobile menu on window resize above 868px', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');

    act(() => {
      window.innerWidth = 900;
      window.dispatchEvent(new Event('resize'));
    });

    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
  });

  it('does not close mobile menu on resize when width <= 868px', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');

    act(() => {
      window.innerWidth = 400;
      window.dispatchEvent(new Event('resize'));
    });

    // Menu should remain open on small screen resize
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');
  });

  it('closes mobile menu when logo or mobile link is clicked', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Fermer le menu');

    const logo = screen.getByText('MD');
    fireEvent.click(logo);
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
  });

  it('closes mobile menu on overlay click', () => {
    const { container } = render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /ouvrir le menu/i });

    fireEvent.click(toggleButton);
    const overlay = container.querySelector('.mobile-menu-overlay');

    fireEvent.click(overlay);
    expect(toggleButton).toHaveAttribute('aria-label', 'Ouvrir le menu');
  });
});
