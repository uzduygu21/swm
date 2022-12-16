import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicelementsComponent } from './basicelements.component';

describe('BasicelementsComponent', () => {
  let component: BasicelementsComponent;
  let fixture: ComponentFixture<BasicelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicelementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
