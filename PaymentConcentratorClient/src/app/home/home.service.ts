import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface PaymentMethod {
  id?: number;
  name: string;
  naziv: string;
  url: string;
  imgPath: string;
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
      return this.http.get<PaymentMethod[]>(`https://localhost:9091/api/tipoviPlacanja/` + merchantId);
  }

  makePayment(url: string, merchantOrderId: string): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(url + "/" + merchantOrderId).pipe(
      catchError(this.errorHandler));     
  }

  errorHandler(error: HttpErrorResponse){
    
    return throwError(error.message || "Server error")
  }
  
}
