import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercheComponent } from './cherche.component';

describe('ChercheComponent', () => {
  let component: ChercheComponent;
  let fixture: ComponentFixture<ChercheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChercheComponent]
    });
    fixture = TestBed.createComponent(ChercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
