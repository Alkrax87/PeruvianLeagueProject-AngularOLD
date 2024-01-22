import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga1FixtureComponent } from './liga1-fixture.component';

describe('Liga1FixtureComponent', () => {
  let component: Liga1FixtureComponent;
  let fixture: ComponentFixture<Liga1FixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga1FixtureComponent]
    });
    fixture = TestBed.createComponent(Liga1FixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
