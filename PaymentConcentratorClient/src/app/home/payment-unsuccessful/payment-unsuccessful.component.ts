import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HomeService } from '../home.service';


export interface Error {
  message: string;
}
@Component({
  selector: 'app-payment-unsuccessful',
  templateUrl: './payment-unsuccessful.component.html',
  styleUrls: ['./payment-unsuccessful.component.css']
})
export class PaymentUnsuccessfulComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() message: Error;

  ngOnInit() {
  }

  ngOnChanges(simpleChange: SimpleChanges){
    if(!this.message){
      return;
    }



  }
  

}
