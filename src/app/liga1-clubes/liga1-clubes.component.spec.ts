import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga1ClubesComponent } from './liga1-clubes.component';

describe('Liga1ClubesComponent', () => {
  let component: Liga1ClubesComponent;
  let fixture: ComponentFixture<Liga1ClubesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga1ClubesComponent]
    });
    fixture = TestBed.createComponent(Liga1ClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
