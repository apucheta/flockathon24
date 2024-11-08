import { Injectable } from '@angular/core';
import { ICandidate } from '../core/interfaces/i-candidate';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getCandidatos(idOferta: number): Array<ICandidate> {
    switch (idOferta) {
      case 1:
        return [
          {
            id: 1,
            name: 'Alice Johnson',
            matchPercentage: 85,
            changes: 4,
            tag: 'FrontEnd',
            experience: '3-5 years',
            skills: ['JavaScript', 'React', 'Node.js'],
          },
          {
            id: 2,
            name: 'Bob Smith',
            matchPercentage: 72,
            changes: 1,
            tag: 'FullStack',
            experience: '3-5 years',
            skills: ['Python', 'Django', 'SQL'],
          },
          {
            id: 3,
            name: 'Charlie Brown',
            matchPercentage: 95,
            changes: 1,
            tag: 'FrontEnd',
            experience: '5+ years',
            skills: ['Java', 'Spring', 'Angular'],
          },
          {
            id: 4,
            name: 'Diana Ross',
            matchPercentage: 68,
            changes: 1,
            tag: 'FullStack',
            experience: '3-5 years',
            skills: ['C#', '.NET', 'Azure'],
          },
          {
            id: 5,
            name: 'Ethan Hunt',
            matchPercentage: 79,
            changes: 2,
            tag: 'FrontEnd',
            experience: '3-5 years',
            skills: ['JavaScript', 'React', 'Node.js'],
          },
        ];

      case 2:
        return [
          {
            id: 1,
            name: 'Alice Johnson',
            matchPercentage: 85,
            changes: 4,
            tag: 'FullStack',
            experience: '3-5 years',
            skills: ['JavaScript', 'React', 'Node.js'],
          },
          {
            id: 2,
            name: 'Juan Prueba',
            matchPercentage: 88,
            changes: 2,
            tag: 'Backend',
            experience: '3-5 years',
            skills: ['C#', '.NET', 'Azure'],
          },
        ];
      case 3:
        return [
          {
            id: 1,
            name: 'Alice Johnson',
            matchPercentage: 33,
            changes: 4,
            tag: 'Backend',
            experience: '3-5 years',
            skills: ['JavaScript', 'React', 'Node.js'],
          },
          {
            id: 2,
            name: 'Bob Smith',
            matchPercentage: 71,
            changes: 1,
            tag: 'FullStack',
            skills: ['Python', 'Django', 'SQL'],
            experience: '0-2 years',
          },
          {
            id: 3,
            name: 'Charlie Brown',
            matchPercentage: 56,
            changes: 1,
            tag: 'FullStack',
            experience: '5+ years',
            skills: ['Java', 'Spring', 'Angular'],
          },
          {
            id: 5,
            name: 'Diana Ross',
            matchPercentage: 79,
            changes: 2,
            tag: 'Backend',
            experience: '3-5 years',
            skills: ['C#', '.NET', 'Azure'],
          },
        ];
      default:
        return [];
    }
  }
}
