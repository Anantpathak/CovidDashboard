import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CovidDataService } from '../../services/covid-data.service';
import { DistrictStatsComponent } from '../../district-stats/district-stats.component';
import { DistrictChartComponent } from '../../district-chart/district-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, DistrictStatsComponent, DistrictChartComponent]
})
export class DashboardComponent implements OnInit {
  statesData: any = {};
  selectedState: string = 'India';
  selectedDistrict: string | null = null;

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

  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedState = target.value;
    this.selectedDistrict = null; // Reset district selection
    this.cdRef.detectChanges();
  }

  onDistrictChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedDistrict = target.value;
    this.cdRef.detectChanges();
  }

  getStateOptions(): string[] {
    return Object.keys(this.statesData).filter(state => state !== 'meta');
  }

  getDistrictOptions(): string[] {
    return this.selectedState && this.statesData[this.selectedState]?.districts
      ? Object.keys(this.statesData[this.selectedState].districts)
      : [];
  }
}