import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PKR = true;
  amount = 50;
  data = [
    {
      name: 'Israr Ali',
      status: true
    },
    {
      name: 'Abcd',
      status: false
    }
  ];
  get usdAmount(){
    return this.PKR ? this.amount * 110 : this.amount;
  };
  get format(){
    return this.PKR ? 'PKR' : 'USD';
  }
  toggleCurrency() {
    this.PKR = !this.PKR;
  }
  constructor() { }

  ngOnInit() {
  }

}
