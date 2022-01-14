import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  r = 1
  b = 1
  g = 1

  constructor() {
  }

  ngOnInit(): void {
  }

}
