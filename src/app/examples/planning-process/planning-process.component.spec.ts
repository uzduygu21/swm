import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningProcessComponent } from './planning-process.component';

describe('PlanningProcessComponent', () => {
  let component: PlanningProcessComponent;
  let fixture: ComponentFixture<PlanningProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
