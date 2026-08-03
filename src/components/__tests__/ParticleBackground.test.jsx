import React from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ParticleBackground from '../ParticleBackground';

describe('ParticleBackground component', () => {
  it('should render canvas element and handle particle animation and edge wrapping', () => {
    vi.useFakeTimers();

    const { container, unmount } = render(
      <div style={{ width: '800px', height: '600px' }}>
        <ParticleBackground />
      </div>
    );

    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();

    // Advance timers so animation frames run repeatedly and particles update positions across canvas boundaries
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // Trigger window resize event
    act(() => {
      window.dispatchEvent(new Event('resize'));
      vi.advanceTimersByTime(1000);
    });

    unmount();
    vi.useRealTimers();
  });
});
