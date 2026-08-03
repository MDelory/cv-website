import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { calculateAge, calculateDuration } from '../dateUtils';

describe('dateUtils', () => {
  describe('calculateAge', () => {
    beforeEach(() => {
      // Mock system time to 2026-08-03
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-08-03T12:00:00Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should calculate correct age when birthday has already passed this year', () => {
      // Born on Aug 12, 1993 -> birthday passed Aug 12 in 2025, but for Aug 3 2026, birthday is Aug 12 1993
      // On Aug 3, 2026: 2026 - 1993 = 33, but Aug 12 hasn't occurred yet in 2026! So age is 32.
      expect(calculateAge('1993-08-12')).toBe(32);
    });

    it('should calculate correct age when birthday was earlier this year', () => {
      // Born on Jan 15, 1990 -> on Aug 3, 2026 age is 36
      expect(calculateAge('1990-01-15')).toBe(36);
    });

    it('should calculate correct age when birthday is today', () => {
      // Born on Aug 3, 1990 -> on Aug 3, 2026 age is 36
      expect(calculateAge('1990-08-03')).toBe(36);
    });

    it('should subtract 1 year if birthday is later this month', () => {
      // Born on Aug 20, 1990 -> on Aug 3, 2026 age is 35
      expect(calculateAge('1990-08-20')).toBe(35);
    });

    it('should subtract 1 year if birthday is in a future month of the year', () => {
      // Born on Dec 10, 1990 -> on Aug 3, 2026 age is 35
      expect(calculateAge('1990-12-10')).toBe(35);
    });
  });

  describe('calculateDuration', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-08-03T12:00:00Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should return months only when years === 0', () => {
      expect(calculateDuration('2026-02-01', '2026-08-01')).toBe('6 mois');
    });

    it('should return singular year when years === 1 and months === 0', () => {
      expect(calculateDuration('2025-08-01', '2026-08-01')).toBe('1 an');
    });

    it('should return plural years when years > 1 and months === 0', () => {
      expect(calculateDuration('2024-08-01', '2026-08-01')).toBe('2 ans');
    });

    it('should handle negative month difference adjusting years', () => {
      // Jan 2024 to Aug 2026 -> 2 ans, 7 mois
      expect(calculateDuration('2024-01-01', '2026-08-01')).toBe('2 ans, 7 mois');
      // Nov 2024 to Feb 2026 -> 1 an, 3 mois
      expect(calculateDuration('2024-11-01', '2026-02-01')).toBe('1 an, 3 mois');
    });

    it('should calculate duration up to current date if endDate is omitted', () => {
      // System time is 2026-08-03. Start date 2024-02-11 -> 2 ans, 6 mois
      const result = calculateDuration('2024-02-11');
      expect(result).toBe('2 ans, 6 mois');
    });
  });
});
