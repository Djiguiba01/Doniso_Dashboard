import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtreformateurComponent } from './etreformateur.component';

describe('EtreformateurComponent', () => {
  let component: EtreformateurComponent;
  let fixture: ComponentFixture<EtreformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtreformateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtreformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
