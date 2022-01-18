import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  passwordCom:new FormControl("",[Validators.required,Validators.minLength(6)]),
  country:new FormControl("",Validators.required),
  age:new FormControl("",[Validators.required,Validators.min(18)]),
  gender: new FormControl("",Validators.required),
  phone:new FormControl("",[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')])
})
  country=["VN","USA","JP"]
  save(){
    alert("afad")
  console.log(this.form.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
