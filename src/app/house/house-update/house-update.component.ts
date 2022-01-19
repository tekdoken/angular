import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../service/house.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {House} from "../../model/house";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})
export class HouseUpdateComponent implements OnInit {
  house: House={name:"",bathroom:""};

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute,private router: Router
    , private form: FormBuilder) {
  }

  editHouseForm: FormGroup = this.form.group({
    name: new FormControl('', Validators.required),
    bathroom: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      this.houseService.findById(id).subscribe(res => {
        this.house = res;
      })
    })
  }

  saveUpdate() {
    const house = this.editHouseForm.value;
    // @ts-ignore
    this.houseService.update(this.house.id,house).subscribe();
    this.router.navigate(["/house"])
  }
}
