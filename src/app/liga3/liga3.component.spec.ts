import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga3Component } from './liga3.component';

describe('Liga3Component', () => {
  let component: Liga3Component;
  let fixture: ComponentFixture<Liga3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga3Component]
    });
    fixture = TestBed.createComponent(Liga3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
