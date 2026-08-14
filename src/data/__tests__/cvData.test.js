import { describe, it, expect } from 'vitest';
import { personalInfo, getAge, profileSummary, skillCategories, experiences, education, hobbies, sideProjects } from '../cvData';

describe('cvData module', () => {
  it('should export valid personalInfo', () => {
    expect(personalInfo.firstName).toBe('Martin');
    expect(personalInfo.lastName).toBe('Delory');
    expect(personalInfo.email).toBeDefined();
    expect(personalInfo.birthDate).toBe('1993-08-12');
  });

  it('should calculate age via getAge()', () => {
    const age = getAge();
    expect(typeof age).toBe('number');
    expect(age).toBeGreaterThan(25);
  });

  it('should generate profileSummary short and full text with given age', () => {
    const shortText = profileSummary.short(32);
    expect(shortText).toContain('32 ans');
    expect(shortText).toContain('Java');

    const fullText = profileSummary.full(32);
    expect(fullText).toContain('32 ans');
    expect(fullText).toContain('Spring Boot 3');
  });

  it('should contain skillCategories with skills', () => {
    expect(Array.isArray(skillCategories)).toBe(true);
    expect(skillCategories.length).toBeGreaterThan(0);
    skillCategories.forEach(category => {
      expect(category.id).toBeDefined();
      expect(category.title).toBeDefined();
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  it('should contain experiences with required properties', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
    experiences.forEach(exp => {
      expect(exp.id).toBeDefined();
      expect(exp.title).toBeDefined();
      expect(exp.startDate).toBeDefined();
    });
  });

  it('should contain education items', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
    education.forEach(edu => {
      expect(edu.id).toBeDefined();
      expect(edu.title).toBeDefined();
    });
  });

  it('should export hobbies containing Sport, Cuisine, and Échecs', () => {
    expect(Array.isArray(hobbies)).toBe(true);
    expect(hobbies.length).toBe(3);
    const names = hobbies.map(h => h.name);
    expect(names).toContain('Sport');
    expect(names).toContain('Cuisine');
    expect(names).toContain('Échecs');
    hobbies.forEach(hobby => {
      expect(hobby.id).toBeDefined();
      expect(hobby.icon).toBeDefined();
    });
  });

  it('should export sideProjects with required items and properties', () => {
    expect(Array.isArray(sideProjects)).toBe(true);
    expect(sideProjects.length).toBe(4);
    const titles = sideProjects.map(p => p.title);
    expect(titles).toContain('docGenerator');
    expect(titles).toContain('BriefMe');
    expect(titles).toContain('Site CV (Version React)');
    expect(titles).toContain('Site CV (Version Angular)');

    sideProjects.forEach(project => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.stack).toBeDefined();
      expect(project.description).toBeDefined();
    });
  });
});



