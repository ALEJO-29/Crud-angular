import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssigmentComponent } from './list-assigment.component';

describe('ListAssigmentComponent', () => {
  let component: ListAssigmentComponent;
  let fixture: ComponentFixture<ListAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssigmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
