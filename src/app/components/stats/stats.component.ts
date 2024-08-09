import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class StatsComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('StatsComponent received data:', this.data);
    }
  }
}
