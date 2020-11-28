import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonDitailComponent} from './person-ditail.component';

describe('PersonDitailComponent', () => {
  let component: PersonDitailComponent;
  let fixture: ComponentFixture<PersonDitailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonDitailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDitailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
