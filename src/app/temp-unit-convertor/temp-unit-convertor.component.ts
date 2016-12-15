import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  choice: string = null;
  celcius: number = null;
  fahrenheit: number = null;
  tempcount: number = 0;
  
  checkId(id) {
    this.choice = id;
  }

  tempconversion(){
    if (this.choice === "cel") {
      this.fahrenheit = this.celcius * 9 / 5 + 32;
    } 
    if (this.choice === "far") {
      this.celcius = (this.fahrenheit - 32) * 5 / 9;    }
    else {
    }	
    this.tempcount++;
  }
}
