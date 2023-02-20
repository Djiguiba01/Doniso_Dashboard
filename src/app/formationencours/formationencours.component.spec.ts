import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationencoursComponent } from './formationencours.component';

describe('FormationencoursComponent', () => {
  let component: FormationencoursComponent;
  let fixture: ComponentFixture<FormationencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationencoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
