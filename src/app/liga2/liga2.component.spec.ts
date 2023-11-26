import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga2Component } from './liga2.component';

describe('Liga2Component', () => {
  let component: Liga2Component;
  let fixture: ComponentFixture<Liga2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga2Component]
    });
    fixture = TestBed.createComponent(Liga2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
