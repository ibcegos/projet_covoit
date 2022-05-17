import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionTrajetComponent } from './proposition-trajet.component';

describe('PropositionTrajetComponent', () => {
  let component: PropositionTrajetComponent;
  let fixture: ComponentFixture<PropositionTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionTrajetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});