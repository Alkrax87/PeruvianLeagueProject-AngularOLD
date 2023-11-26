import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga1TablaComponent } from './liga1-tabla.component';

describe('Liga1TablaComponent', () => {
  let component: Liga1TablaComponent;
  let fixture: ComponentFixture<Liga1TablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga1TablaComponent]
    });
    fixture = TestBed.createComponent(Liga1TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
