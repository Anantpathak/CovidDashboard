import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>COVID-19 Dashboard</h1>
    </header>
  `,
  styles: [`
    header {
      text-align: center;
      padding: 1rem;
      background-color: #1976d2;
      color: white;
    }
  `],
  standalone: true
})
export class HeaderComponent {}