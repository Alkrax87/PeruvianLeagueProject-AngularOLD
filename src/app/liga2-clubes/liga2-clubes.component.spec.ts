import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga2ClubesComponent } from './liga2-clubes.component';

describe('Liga2ClubesComponent', () => {
  let component: Liga2ClubesComponent;
  let fixture: ComponentFixture<Liga2ClubesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga2ClubesComponent]
    });
    fixture = TestBed.createComponent(Liga2ClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
