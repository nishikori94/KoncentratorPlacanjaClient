import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
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

  errorHappened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) { }

  getPaymentMethods(merchantId: string): Observable<PaymentMethod[]> {
      return this.http.get<PaymentMethod[]>(`https://localhost:9091/api/tipoviPlacanja/` + merchantId).pipe(
        catchError(this.errorHandler));   
  }

  makePayment(url: string, merchantOrderId: string): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(url + "/" + merchantOrderId).pipe(
      catchError(this.errorHandler));     
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
  
}
