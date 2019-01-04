import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalService } from './paypal.service';

@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html'
})
export class PaypalSuccessComponent implements OnInit {

  constructor(private paypalService: PaypalService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['paymentId'] !== undefined && params['PayerID'] !== undefined) {
        this.paypalService.completePayment(params['paymentId'], params['PayerID']);
      }
    });
    setTimeout(() => {
      window.location.href = "https://localhost:4201";
  }, 5000); 

  }

}
