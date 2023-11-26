import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga1Component } from './liga1.component';

describe('Liga1Component', () => {
  let component: Liga1Component;
  let fixture: ComponentFixture<Liga1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga1Component]
    });
    fixture = TestBed.createComponent(Liga1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
