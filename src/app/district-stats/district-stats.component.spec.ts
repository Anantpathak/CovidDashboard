import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictStatsComponent } from './district-stats.component';

describe('DistrictStatsComponent', () => {
  let component: DistrictStatsComponent;
  let fixture: ComponentFixture<DistrictStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
