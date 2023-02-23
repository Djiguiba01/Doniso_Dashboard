import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationformateurComponent } from './validationformateur.component';

describe('ValidationformateurComponent', () => {
  let component: ValidationformateurComponent;
  let fixture: ComponentFixture<ValidationformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationformateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
