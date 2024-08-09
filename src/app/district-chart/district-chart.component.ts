// src/app/components/district-chart/district-chart.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-district-chart',
  templateUrl: './district-chart.component.html',
  styleUrls: ['./district-chart.component.css'],
  standalone: true,
  imports: [] // Import other modules/components if needed
})
export class DistrictChartComponent {
  @Input() data: any; // Make sure this matches the expected input
}
