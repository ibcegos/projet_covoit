import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetRecurrentComponent } from './trajet-recurrent.component';

describe('TrajetRecurrentComponent', () => {
  let component: TrajetRecurrentComponent;
  let fixture: ComponentFixture<TrajetRecurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajetRecurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetRecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});