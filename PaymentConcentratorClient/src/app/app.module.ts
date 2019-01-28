import { HomeService } from './home/home.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentMethodComponent } from './home/payment-method/payment-method.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';
import { PaypalService } from './paypal-success/paypal.service';
import { PaymentUnsuccessfulComponent } from './home/payment-unsuccessful/payment-unsuccessful.component';
import { UnsuccessfulComponent } from './unsuccessful/unsuccessful.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentMethodComponent,
    PaypalSuccessComponent,
    PaymentUnsuccessfulComponent,
    UnsuccessfulComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ HomeService, PaypalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
