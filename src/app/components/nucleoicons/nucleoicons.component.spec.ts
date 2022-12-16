import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoiconsComponent } from './nucleoicons.component';

describe('NucleoiconsComponent', () => {
  let component: NucleoiconsComponent;
  let fixture: ComponentFixture<NucleoiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NucleoiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
