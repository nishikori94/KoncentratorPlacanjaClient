import { HomeService, PaymentMethod, UrlResponse } from './home.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  casopisId: string;
  merchantOrderId: string;

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  paymentMethods: PaymentMethod[] = [];
  urlResponse: UrlResponse;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.casopisId = params.get('merchantId'); // (+) converts string 'id' to a number
      this.merchantOrderId = params.get('merchantOrderId');
      // In a real app: dispatch action to load the details here.
      this.homeService.getPaymentMethods(this.casopisId).subscribe(data => {
        this.paymentMethods = data.map(pm => {
            console.log(pm.naziv);
            return {
                id: pm.id,
                name: pm.naziv,
                naziv: pm.naziv,
                url: pm.url
            };
        });
    });
   });

    

  }

  onPayClick(id: number) {
    const paymentMethods = this.paymentMethods.filter(pm => pm.id === id);
    if (!paymentMethods || paymentMethods.length === 0) {
      console.log('Payment method inconsistent value');
      return;
    }

    const paymentMethod = paymentMethods[0];
      this.homeService.makePayment(paymentMethod.url, this.merchantOrderId).subscribe(data => {
        window.location.href = data.url;
      });
  }
}
