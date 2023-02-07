import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailparticipantComponent } from './detailparticipant.component';

describe('DetailparticipantComponent', () => {
  let component: DetailparticipantComponent;
  let fixture: ComponentFixture<DetailparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailparticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
