import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import PDFDownloadButton from '../PDFDownloadButton';

const mockSave = vi.fn();

vi.mock('html2canvas', () => ({
  default: vi.fn(function () {
    return Promise.resolve({
      width: 794,
      height: 1123,
      toDataURL: function () {
        return 'data:image/jpeg;base64,mockdata';
      },
    });
  }),
}));

vi.mock('jspdf', () => ({
  jsPDF: function () {
    return {
      internal: {
        pageSize: {
          getWidth: function () { return 210; },
          getHeight: function () { return 297; },
        },
      },
      addImage: vi.fn(),
      save: mockSave,
    };
  },
}));

describe('PDFDownloadButton component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders primary variant by default', () => {
    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });
    expect(button).toBeInTheDocument();
  });

  it('renders nav variant when variant="nav"', () => {
    render(<PDFDownloadButton variant="nav" />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });
    expect(button).toBeInTheDocument();
  });

  it('handles mouse enter and mouse leave events on primary variant', () => {
    render(<PDFDownloadButton variant="primary" />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
  });

  it('handles mouse enter and mouse leave events on nav variant', () => {
    render(<PDFDownloadButton variant="nav" />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
  });

  it('does not fire click action when already loading', async () => {
    const template = document.createElement('div');
    template.id = 'cv-pdf-template';
    document.body.appendChild(template);

    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    // First click starts loading
    fireEvent.click(button);
    // Second click while loading should be a no-op
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledTimes(1);
    }, { timeout: 3000 });
  });

  it('shows error alert if template element is missing when clicked', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(alertSpy).toHaveBeenCalledWith(
        expect.stringContaining('Une erreur est survenue')
      );
    });

    alertSpy.mockRestore();
    consoleSpy.mockRestore();
  });

  it('generates and downloads PDF when template exists (canvas fits in 1 A4 page)', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const template = document.createElement('div');
    template.id = 'cv-pdf-template';
    document.body.appendChild(template);

    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledWith('CV_Martin_Delory_Java_Backend.pdf');
    }, { timeout: 3000 });

    consoleSpy.mockRestore();
  });

  it('generates and downloads PDF when template exists (canvas taller than A4 — scaling branch)', async () => {
    const html2canvasMock = (await import('html2canvas')).default;
    html2canvasMock.mockImplementationOnce(() =>
      Promise.resolve({
        width: 794,
        height: 3000,
        toDataURL: () => 'data:image/jpeg;base64,mockdata',
      })
    );

    const template = document.createElement('div');
    template.id = 'cv-pdf-template';
    document.body.appendChild(template);

    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledWith('CV_Martin_Delory_Java_Backend.pdf');
    }, { timeout: 3000 });
  });

  it('handles image loading via onload/onerror when image is not yet complete', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Temporarily override complete to return false for this test
    Object.defineProperty(HTMLImageElement.prototype, 'complete', {
      get() { return false; },
      configurable: true,
    });
    Object.defineProperty(HTMLImageElement.prototype, 'naturalWidth', {
      get() { return 0; },
      configurable: true,
    });

    const template = document.createElement('div');
    template.id = 'cv-pdf-template';
    const img = document.createElement('img');
    template.appendChild(img);
    document.body.appendChild(template);

    render(<PDFDownloadButton />);
    const button = screen.getByRole('button', { name: /télécharger cv/i });

    fireEvent.click(button);

    // Manually trigger onload on the cloned image to resolve the promise
    await new Promise(resolve => setTimeout(resolve, 50));
    const clonedImages = document.querySelectorAll('img');
    clonedImages.forEach(imgEl => {
      if (imgEl.onload) imgEl.onload();
    });

    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledWith('CV_Martin_Delory_Java_Backend.pdf');
    }, { timeout: 3000 });

    // Restore the global mock
    Object.defineProperty(HTMLImageElement.prototype, 'complete', {
      get() { return true; },
      configurable: true,
    });
    Object.defineProperty(HTMLImageElement.prototype, 'naturalWidth', {
      get() { return 100; },
      configurable: true,
    });

    consoleSpy.mockRestore();
  });
});
