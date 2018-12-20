import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';

export const routes: Routes = [
    { path: 'redirect/:merchantId/:merchantOrderId', component: HomeComponent},
    { path: 'paypalSuccess', component: PaypalSuccessComponent}
]