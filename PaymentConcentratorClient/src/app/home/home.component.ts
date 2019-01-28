import { HomeService, PaymentMethod, UrlResponse } from './home.service';

import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  casopisId: string;
  merchantOrderId: string;
  message=' asfas as';

  constructor(private homeService: HomeService, private route: ActivatedRoute, private router: Router) { }

  paymentMethods: PaymentMethod[] = [];
  urlResponse: UrlResponse;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.casopisId = params.get('merchantId'); // (+) converts string 'id' to a number
      this.merchantOrderId = params.get('merchantOrderId');
      // In a real app: dispatch action to load the details here.
      this.homeService.getPaymentMethods(this.casopisId).subscribe(data => {
        this.paymentMethods = data.map(pm => {
            return {
                id: pm.id,
                name: pm.naziv,
                naziv: pm.naziv,
                url: pm.url,
                imgPath: pm.imgPath
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
      this.homeService.makePayment(paymentMethod.url, this.merchantOrderId)
          .subscribe(data =>  {
                      window.location.href = data.url;
                      },
                     error => {
                       this.message = error;
                       this.router.navigate(['redirect/paymentUnsuccessful']);
                      }
                    );
  }
}
