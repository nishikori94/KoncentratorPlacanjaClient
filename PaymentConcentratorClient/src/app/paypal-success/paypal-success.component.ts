import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from './paypal.service';

@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.css']
})
export class PaypalSuccessComponent implements OnInit {

  constructor(private paypalService: PaypalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['paymentId'] !== undefined && params['PayerID'] !== undefined) {
        this.paypalService.completePayment(params['paymentId'], params['PayerID']).subscribe( response => {
          console.log(response.json());
        });
      }
    })

  }

}
