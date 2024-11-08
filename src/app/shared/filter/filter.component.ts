import { Component, Output, EventEmitter } from '@angular/core';

export interface FilterCriteria {
  experience: string;
  skills: string[];
  minMatchPercentage: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<FilterCriteria>();

  experienceOptions: string[] = ['0-2 years', '3-5 years', '5+ years'];
  skillOptions: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'MongoDB', 'SQL'];

  filterCriteria: FilterCriteria = {
    experience: '',
    skills: [],
    minMatchPercentage: 0
  };

  onFilterChange() {
    this.filterChange.emit(this.filterCriteria);
  }
}
