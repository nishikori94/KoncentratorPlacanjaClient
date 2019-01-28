import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUnsuccessfulComponent } from './payment-unsuccessful.component';

describe('PaymentUnsuccessfulComponent', () => {
  let component: PaymentUnsuccessfulComponent;
  let fixture: ComponentFixture<PaymentUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
