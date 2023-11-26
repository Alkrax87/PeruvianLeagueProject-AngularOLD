import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaPeruComponent } from './copa-peru.component';

describe('CopaPeruComponent', () => {
  let component: CopaPeruComponent;
  let fixture: ComponentFixture<CopaPeruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopaPeruComponent]
    });
    fixture = TestBed.createComponent(CopaPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
