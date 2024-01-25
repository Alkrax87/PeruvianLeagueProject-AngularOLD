import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liga2FixtureComponent } from './liga2-fixture.component';

describe('Liga2FixtureComponent', () => {
  let component: Liga2FixtureComponent;
  let fixture: ComponentFixture<Liga2FixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Liga2FixtureComponent]
    });
    fixture = TestBed.createComponent(Liga2FixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
