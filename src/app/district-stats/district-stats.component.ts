import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-district-stats',
  templateUrl: './district-stats.component.html',
  styleUrls: ['./district-stats.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DistrictStatsComponent {
  @Input() data: any;

  ngOnChanges() {
    console.log('districtComponent Data:', this.data); // Log data to check if it’s being received
  } 
}
