import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatsComponent } from './total-stats.component';

describe('TotalStatsComponent', () => {
  let component: TotalStatsComponent;
  let fixture: ComponentFixture<TotalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
