// src/app/components/total-stats/total-stats.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-stats',
  templateUrl: './total-stats.component.html',
  styleUrls: ['./total-stats.component.css'],
  standalone: true,
  imports: [] // Import other modules/components if needed
})
export class TotalStatsComponent {
  @Input() data: any; // Adjust type as needed
}