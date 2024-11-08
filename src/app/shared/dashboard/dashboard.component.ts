import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IJobOffer } from '../../core/interfaces/i-job-offer';
import { ICandidate } from '../../core/interfaces/i-candidate';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlertaComponent } from '../modal-alerta/modal-alerta.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobOffers: IJobOffer[] = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "$80,000 - $120,000" },
    { id: 2, title: "Backend Engineer", company: "DataSys", location: "New York, NY", salary: "$90,000 - $130,000" },
    { id: 3, title: "Full Stack Developer", company: "WebSolutions", location: "San Francisco, CA", salary: "$100,000 - $150,000" },
  ];

  candidates: ICandidate[] = [];

  selectedJob: IJobOffer;
  candidatesDataSource: MatTableDataSource<ICandidate>;
  displayedColumns: string[] = ['nombre', 'matchPercentage'];

  constructor(private readonly dialog: MatDialog, private readonly dashboardService: DashboardService) {
    this.selectedJob = this.jobOffers[0];
    this.candidatesDataSource = new MatTableDataSource(this.candidates);
  }

  ngOnInit() {
    this.candidates = this.dashboardService.getCandidatos(this.selectedJob.id)
    this.sortCandidates();
  }

  selectJob(job: IJobOffer) {
    this.selectedJob = job;
    this.candidates = this.dashboardService.getCandidatos(this.selectedJob.id)
    this.sortCandidates();
  }

  sortCandidates() {
    this.candidates.sort((a, b) => b.matchPercentage - a.matchPercentage);
    this.candidatesDataSource.data = this.candidates;
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  openAlertModal(candidate: ICandidate) {
    this.dialog.open(ModalAlertaComponent, {
      data: candidate
    });
  }
}
