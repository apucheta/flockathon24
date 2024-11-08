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
          },
          {
            id: 2,
            name: 'Bob Smith',
            matchPercentage: 72,
            changes: 1,
            tag: 'FullStack',
          },
          {
            id: 3,
            name: 'Charlie Brown',
            matchPercentage: 95,
            changes: 1,
            tag: 'FrontEnd',
          },
          {
            id: 4,
            name: 'Diana Ross',
            matchPercentage: 68,
            changes: 1,
            tag: 'FullStack',
          },
          {
            id: 5,
            name: 'Ethan Hunt',
            matchPercentage: 79,
            changes: 2,
            tag: 'FrontEnd',
          },
        ];

      case 2:
        return [
          { id: 1, name: 'Alice Johnson', matchPercentage: 85, changes: 4, tag: "FullStack" },
          { id: 2, name: 'Juan Prueba', matchPercentage: 88, changes: 2, tag: "Backend" },
        ];
      case 3:
        return [
          { id: 1, name: 'Alice Johnson', matchPercentage: 33, changes: 4, tag: "Backend" },
          { id: 2, name: 'Bob Smith', matchPercentage: 71, changes: 1, tag: "FullStack" },
          { id: 3, name: 'Charlie Brown', matchPercentage: 56, changes: 1, tag: "FullStack" },
          { id: 5, name: 'Diana Ross', matchPercentage: 79, changes: 2, tag: "Backend" },
        ];
      default:
        return [];
    }
  }
}
