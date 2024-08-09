import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidDataService } from '../../services/covid-data.service';
import { StatsComponent } from '../../components/stats/stats.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-state-dashboard',
  standalone: true,
  imports: [CommonModule, StatsComponent, ChartComponent,],
  templateUrl: './state-dashboard.component.html',
  styleUrls: ['./state-dashboard.component.css']
})
export class StateDashboardComponent implements OnInit {
  statesData: any = {};
  router: any;

  constructor(
    private covidDataService: CovidDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.covidDataService.getCovidData().then(data => {
      this.statesData = data;
      this.cdRef.detectChanges();
    }).catch(error => {
      console.error('Error fetching data', error);
    });
  }

  getStateOptions(): string[] {
    return Object.keys(this.statesData).filter(state => state !== 'meta');
  }
  showDistricts() {
    this.router.navigate(['/district']); // Navigate to district view
  }
}
