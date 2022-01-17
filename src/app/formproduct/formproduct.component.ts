import { Component, OnInit } from '@angular/core';
import {Product} from "../model/producct";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {

  listProduct: Product[] = [
  ]
  form = new FormGroup({
    name :new FormControl(),
    id :new FormControl(),
    price :new FormControl()})
  cre(){
    // @ts-ignore
    this.listProduct.push(this.form.value)
  }
  constructor() {
  }

  ngOnInit(): void {
  }
}
