import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutResidenceComponent } from './ajout-residence.component';

describe('AjoutResidenceComponent', () => {
  let component: AjoutResidenceComponent;
  let fixture: ComponentFixture<AjoutResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutResidenceComponent]
    });
    fixture = TestBed.createComponent(AjoutResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
