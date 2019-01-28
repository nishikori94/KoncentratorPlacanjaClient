import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';
import { PaymentUnsuccessfulComponent } from './home/payment-unsuccessful/payment-unsuccessful.component';
import { UnsuccessfulComponent } from './unsuccessful/unsuccessful.component';

export const routes: Routes = [
    { path: 'redirect/:merchantId/:merchantOrderId', component: HomeComponent},
    { path: 'paypalSuccess', component: PaypalSuccessComponent},
    { path: 'redirect/paymentUnsuccessful', component: PaymentUnsuccessfulComponent},
    { path: 'unsuccessful', component: UnsuccessfulComponent}
]