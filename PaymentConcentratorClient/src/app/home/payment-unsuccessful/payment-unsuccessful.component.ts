import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-unsuccessful',
  templateUrl: './payment-unsuccessful.component.html',
  styleUrls: ['./payment-unsuccessful.component.css']
})
export class PaymentUnsuccessfulComponent implements OnInit {

  constructor() { }

  @Input() message: string;

  ngOnInit() {
  }

}
