import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteConComponent } from './contacte-con.component';

describe('ContacteConComponent', () => {
  let component: ContacteConComponent;
  let fixture: ComponentFixture<ContacteConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacteConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacteConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
