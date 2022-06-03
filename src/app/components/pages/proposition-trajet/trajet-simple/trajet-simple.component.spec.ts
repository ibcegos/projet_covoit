import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetSimpleComponent } from './trajet-simple.component';

describe('TrajetSimpleComponent', () => {
  let component: TrajetSimpleComponent;
  let fixture: ComponentFixture<TrajetSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajetSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});