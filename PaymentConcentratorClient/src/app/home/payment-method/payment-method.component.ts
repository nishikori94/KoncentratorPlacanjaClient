import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentMethod } from '../home.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html'
})
export class PaymentMethodComponent implements OnInit {

  @Input()
  paymentMethod: PaymentMethod;

  @Output()
  paymentClicked: EventEmitter<number> = new EventEmitter(null);

  constructor() { }

  ngOnInit() {
  }

  onPaymentClick() {
      this.paymentClicked.emit(this.paymentMethod.id);
    }
}
