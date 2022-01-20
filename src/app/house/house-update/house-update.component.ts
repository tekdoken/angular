import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../service/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {House} from "../../model/house";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})
export class HouseUpdateComponent implements OnInit {
  house: House = {name: "", bathroom: ""};
  category: Category[] = [];
  ca!: Category;
time!:boolean;
  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router
    , private form: FormBuilder) {
  }

  editHouseForm: FormGroup = this.form.group({
    name: new FormControl('', Validators.required),
    bathroom: new FormControl('', Validators.required),
    category: new FormControl()
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      this.houseService.findById(id).subscribe(res => {
        this.house = res;
        // @ts-ignore
        this.ca=res.category?.id;
      })
      this.houseService.getAllCategory().subscribe(cate=>{
        this.category=cate;
      })
    })
  }

  saveUpdate() {
    const house = this.editHouseForm.value;
    // if (house.category==null){
    //   house.category=this.house.category?.id
    // }
    this.ca={
      id:house.category
    }
    house.category=this.ca;
    // @ts-ignore
    this.houseService.update(this.house.id, house).subscribe();
    // @ts-ignore
    this.time=setInterval(() => {
    this.router.navigate(["/house"])}, 70);
  }
  ngOnDestroy() {
    if (this.time) {
      // @ts-ignore
      clearInterval(this.time);
    }
  }
}
