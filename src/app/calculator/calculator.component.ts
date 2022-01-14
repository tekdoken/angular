import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  i1(): number {
    // @ts-ignore
    let i1 = +document.getElementById("re1").value;
    return i1;
  }

  i2(): number {
    // @ts-ignore
    let i2 = +document.getElementById("re2").value;
    return i2;
  }

  cong() {
    let ret = this.i1() + this.i2();

    // @ts-ignore
    document.getElementById("res").innerHTML = ret
    // @ts-ignore
    document.getElementById("di").style.background="red"
    // @ts-ignore
    document.getElementById("di").style.height="600px"
  }

  nhan() {
    let ret = this.i1() * this.i2();
    // @ts-ignore
    document.getElementById("res").innerHTML = ret
    // @ts-ignore
    document.getElementById("di").style.background="rgb(107,69,255)"
    // @ts-ignore
    document.getElementById("di").style.height="600px"
  }

  tru() {
    let ret = this.i1() - this.i2();
    // @ts-ignore
    document.getElementById("res").innerHTML = ret
    // @ts-ignore
    document.getElementById("di").style.background="#7FFFD4FF"
    // @ts-ignore
    document.getElementById("di").style.height="600px"
  }

  chia() {
    let ret = this.i1() / this.i2();
    // @ts-ignore
    document.getElementById("res").innerHTML = ret
    // @ts-ignore
    document.getElementById("di").style.background="blue"
    // @ts-ignore
    document.getElementById("di").style.height="600px"
  }
}
