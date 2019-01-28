import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) {}

  completePayment(paymentId: String, payerId: String){
    return this.http.post<any>('https://localhost:9091/api/paypal/complete?paymentId=' + paymentId + '&payerId=' + payerId, {}).subscribe(
      response => {
       }
      );
  }
}
