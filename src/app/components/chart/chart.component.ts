import { Component, Input, OnChanges, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true
})
export class ChartComponent implements OnChanges, AfterViewInit {
  @Input() data: any;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | null = null;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.renderChart();
    }
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy previous chart instance to avoid duplication
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Confirmed', 'Recovered', 'Deceased', 'Tested', 'Vaccinated 1st Dose', 'Vaccinated 2nd Dose'],
          datasets: [{
            label: 'Cases',
            data: [
              this.data?.confirmed || 0,
              this.data?.recovered || 0,
              this.data?.deceased || 0,
              this.data?.tested || 0,
              this.data?.vaccinated1 || 0,
              this.data?.vaccinated2 || 0
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
          }]
        }
      });
    } else {
      console.error('Failed to get 2D context for canvas element.');
    }
  }
}
