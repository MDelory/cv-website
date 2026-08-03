import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock offsetWidth & offsetHeight for jsdom layout calculations
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  get() { return 1000; },
  configurable: true,
});
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
  get() { return 800; },
  configurable: true,
});

// Mock IntersectionObserver for components using active section observer (e.g. Navbar)
class MockIntersectionObserver {
  static instances = [];
  constructor(callback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
MockIntersectionObserver.instances = [];

window.IntersectionObserver = MockIntersectionObserver;

// Mock HTMLCanvasElement getContext for ParticleBackground
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  clearRect: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  stroke: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
}));

// Mock requestAnimationFrame & cancelAnimationFrame
window.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 16));
window.cancelAnimationFrame = vi.fn((id) => clearTimeout(id));

// Mock window.alert
window.alert = vi.fn();

// Mock HTMLImageElement complete & naturalWidth for jsdom cloneNode
Object.defineProperty(HTMLImageElement.prototype, 'complete', {
  get() { return true; },
  configurable: true,
});
Object.defineProperty(HTMLImageElement.prototype, 'naturalWidth', {
  get() { return 100; },
  configurable: true,
});
