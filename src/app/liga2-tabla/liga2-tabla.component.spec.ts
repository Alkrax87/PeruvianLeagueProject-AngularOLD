import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga2TablaComponent } from './liga2-tabla.component';

describe('Liga2TablaComponent', () => {
  let component: Liga2TablaComponent;
  let fixture: ComponentFixture<Liga2TablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga2TablaComponent]
    });
    fixture = TestBed.createComponent(Liga2TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
