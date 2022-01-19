import {Component, OnInit} from '@angular/core';
import {House} from "../../model/house";
import {Category} from "../../model/category";
import {HouseService} from "../../service/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  house: House = {name: "", bathroom: "" };
  ca!:Category;
  category:Category[]=[];
  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router
    , private form: FormBuilder) {
  }

  createHouseForm: FormGroup = this.form.group({
    name: new FormControl('', Validators.required),
    bathroom: new FormControl('', Validators.required),
    category: new FormControl()
  })

  ngOnInit(): void {
    this.houseService.getAllCategory().subscribe(res=>{
      console.log(res)
      this.category=res;
    })
  }

  saveUpdate() {
    const house = this.createHouseForm.value;
    this.ca={id:house.category}
    house.category=this.ca
    this.houseService.save( house).subscribe();
    this.router.navigate(["/house"])
  }
}
