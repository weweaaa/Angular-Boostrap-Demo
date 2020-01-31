import { Component, OnInit } from '@angular/core';

const dataElements = [{
  name: 'Russia',
  flag: 'f/f3/Flag_of_Russia.svg',
  area: 17075200,
  population: 146989754
},
{
  name: 'Canada',
  flag: 'c/cf/Flag_of_Canada.svg',
  area: 9976140,
  population: 36624199
}];

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css']
})
export class TableBasicComponent implements OnInit {

  constructor() { }

  data: any = dataElements;

  ngOnInit() {
  }

  getNestedLoopKey(item: any) {
    if (item !== undefined) {
      return Object.keys(item[0]);
    } else {
      return [];
    }
  }

  getNestedLoopValues(item: any) {
    return Object.values(item);
  }
}
