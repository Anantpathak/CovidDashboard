// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StateDashboardComponent } from './pages/state-dashboard/state-dashboard.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="dashboard-container">
      <app-state-dashboard></app-state-dashboard>
      <div class="dashboard-content">
        <app-dashboard></app-dashboard>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, StateDashboardComponent]
})
export class AppComponent {
  showDistricts() {
    // Implement logic to switch to district data
    console.log('Switch to district data');
  }
}
