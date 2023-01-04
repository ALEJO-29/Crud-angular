import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssigmentComponent } from './update-assigment.component';

describe('UpdateAssigmentComponent', () => {
  let component: UpdateAssigmentComponent;
  let fixture: ComponentFixture<UpdateAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssigmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
