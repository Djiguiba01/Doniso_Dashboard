import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionparticipantComponent } from './gestionparticipant.component';

describe('GestionparticipantComponent', () => {
  let component: GestionparticipantComponent;
  let fixture: ComponentFixture<GestionparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionparticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
