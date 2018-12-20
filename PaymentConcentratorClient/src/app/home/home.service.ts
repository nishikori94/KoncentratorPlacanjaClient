import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaymentMethod {
  id?: number;
  name: string;
  naziv: string;
  url: string;
}

export interface UrlResponse {
  id?: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getPaymentMethods(merchantId: string): Observable<PaymentMethod[]> {
      return this.http.get<PaymentMethod[]>(`http://localhost:9091/placanje/tipoviPlacanja/` + merchantId);
  }

  makePayment(url: string, merchantOrderId: string): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(url + "/" + merchantOrderId);
  }
}
