import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders without crashing and includes main layout elements', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
    expect(container.querySelector('header.navbar')).toBeInTheDocument();
    expect(container.querySelector('#home')).toBeInTheDocument();
    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#experience')).toBeInTheDocument();
    expect(container.querySelector('#skills')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });
});
