import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
   money = 10000;
    buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (this.money >= 10000) {
          resolve("can buy " + car);
        } else {
          reject("Do not enough money");
        }
      }, 100);
    }))
  }
  promise = this.buyACar("Vinfast").then(value => {
    console.log(value);
  }, error => {
    console.log(error);
  })
  constructor() { }

  ngOnInit(): void {
  }

}
