import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoututilisateurComponent } from './ajoututilisateur.component';

describe('AjoututilisateurComponent', () => {
  let component: AjoututilisateurComponent;
  let fixture: ComponentFixture<AjoututilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoututilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoututilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
