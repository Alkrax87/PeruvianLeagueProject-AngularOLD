import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga2TecnicosComponent } from './liga2-tecnicos.component';

describe('Liga2TecnicosComponent', () => {
  let component: Liga2TecnicosComponent;
  let fixture: ComponentFixture<Liga2TecnicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga2TecnicosComponent]
    });
    fixture = TestBed.createComponent(Liga2TecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
