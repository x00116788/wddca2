import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }

  ngOnInit() { }
   weightOption:string = "";
  heightOption:string = "";  
 
 // weight Conversion
  stone:number = null;
  pounds:number = null;
  kgs:number = null;

// height conversion
  feet:number = null;
  inches:number = null;
  metres:number = null;

// BMI calculation 
  bmi:number = null;
  BMIrange:string = "";
  message:string = "";

  weightConversion(id) {
    this.weightOption = id;

    if (this.weightOption === "stone") {
      this.stone = Math.floor(this.stone);
      this.pounds = Math.round((this.stone * 14)%14) ;
      this.kgs = Math.round((this.stone * 6.3503) * 100) / 100; 
 }

    else if (this.weightOption === "pounds") {
      this.kgs = Math.round((this.kgs + this.pounds * 0.4536) * 10000) / 10000;
    }
    else {
      this.stone = Math.floor(this.kgs *  0.157473);
      this.pounds = Math.round((this.kgs / 0.4536) %14);//round to 4 decimalplaces
    }

  }

  heightConversion(id) {
    this.heightOption = id;

    if (this.heightOption === "inches") {
      this.metres = Math.round((this.metres + (this.inches * 0.0254)) * 100) / 100;
    }

    else if (this.heightOption === "feet") {
      this.metres = Math.round((this.feet * 0.3048) * 100) / 100;
    }

    // else its meters
    else {
      this.inches = Math.round((this.metres * 12)%12);
      this.feet = Math.floor(this.metres / 0.3048);
    }
  }

  BMIcalculation() {
    this.bmi = Math.round((this.kgs / (this.metres * this.metres)) * 100) / 100;

    if (this.bmi >= 25 && this.bmi < 30) {
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Overweight range";
    }

    else if (this.bmi >= 18 && this.bmi < 25) { 
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Normal range";
    } 

    else if (this.bmi >= 0 && this.bmi < 18) {
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Underweight range";
    }
    else if (this.bmi >= 30){
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Obese range";
    }

    // else statement with error message for invalid or no values 
    else {
      this.message = "Values must be entered to perform calculation!";
    }
  }

  rangecolor(){
  if(this.BMIrange == "Normal Range"){
    return "green";
  }
  else{
    return "red";
  }
}

}
