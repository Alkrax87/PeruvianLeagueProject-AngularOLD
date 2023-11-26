import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoReservasComponent } from './torneo-reservas.component';

describe('TorneoReservasComponent', () => {
  let component: TorneoReservasComponent;
  let fixture: ComponentFixture<TorneoReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneoReservasComponent]
    });
    fixture = TestBed.createComponent(TorneoReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
