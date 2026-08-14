import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Hoisted pour être disponible au moment du vi.mock()
const mockData = vi.hoisted(() => ({
    personalInfo: {
        firstName: 'Martin',
        lastName: 'Delory',
        title: 'Dev',
        email: 'a@b.fr',
        location: 'Lille',
        mobility: 'Permis B',
        linkedin: 'linkedin',
        github: 'github',
        birthDate: '1993-08-12',
    },

    getAge: () => 32,

    profileSummary: {
        full: (age) => `Dev ${age} ans`,
    },

    skillCategories: [
        {
            id: 'backend',
            pdfLabel: 'BACKEND',
            skills: ['Java'],
        },
    ],

    experiences: [
        {
            id: 'noclient',
            title: 'Développeur Solo',
            company: 'SoloCompany',
            client: null, // <-- branche false à tester
            startDate: '2022-01-01',
            endDate: '2023-01-01',
            bullets: ['Bullet test'],
            description: 'Desc',
        },
    ],

    education: [
        {
            id: 'e1',
            shortTitle: 'BTS',
            establishment: 'Lycée',
            year: '2014',
            description: '',
        },
    ],

    hobbies: [
        {
            id: 'sport',
            name: 'Sport',
            icon: 'Dumbbell',
            description: 'Sport',
        },
    ],
    sideProjects: [],
}));


vi.mock('../../data/cvData', () => mockData);

import PDFTemplate from '../PDFTemplate';

describe('PDFTemplate (mock data)', () => {
    it('renders company name when client is null', () => {
        render(<PDFTemplate />);

        expect(screen.getByText('PROFIL PROFESSIONNEL')).toBeInTheDocument();

        // Vérifie que le nom de la société est affiché
        expect(screen.getByText(/SoloCompany/)).toBeInTheDocument();

        // Vérifie que "Mission Client" n'apparaît pas
        expect(screen.queryByText(/Mission Client/i)).not.toBeInTheDocument();
    });
});