import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersNameComponent } from './customers-name.component';

describe('CustomersNameComponent', () => {
  let component: CustomersNameComponent;
  let fixture: ComponentFixture<CustomersNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
