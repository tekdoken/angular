import {Component, OnInit} from '@angular/core';
import {House} from "../../model/house";
import {HouseService} from "../../service/house.service";

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.houseService.getAll().subscribe(res => {
      this.houses = res;
    })
  }

  delete(id:any){
    // @ts-ignore
    this.houseService.delete(id).subscribe(()=> {
      this.ngOnInit()
    });
  }
}
