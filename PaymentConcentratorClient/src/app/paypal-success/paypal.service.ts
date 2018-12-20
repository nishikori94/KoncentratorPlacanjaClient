import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) {}

  completePayment(paymentId: String, payerId: String){
    return this.http.post<any>(`http://localhost:9091/paypal/complete/payment?paymentId=` + paymentId + `&payerId=` + payerId, {});
  }
}
