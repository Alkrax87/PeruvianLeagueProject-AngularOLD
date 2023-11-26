import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HListTeamsComponent } from './h-list-teams.component';

describe('HListTeamsComponent', () => {
  let component: HListTeamsComponent;
  let fixture: ComponentFixture<HListTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HListTeamsComponent]
    });
    fixture = TestBed.createComponent(HListTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
