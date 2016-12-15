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
      this.pounds = (this.stone * 14) %14;
      this.kgs = this.stone / 0.15747
      this.pounds = Math.round(this.pounds * 100) / 100;
      this.kgs = Math.round(this.kgs * 100) / 100; 
      //this.stone = Math.round(this.stone );

    }
    else if (this.weightOption === "pounds") {
      this.stone = this.pounds * 0.071429;
      this.kgs = this.pounds * 0.4536;
      this.pounds = this.pounds % 14;
      this.kgs = Math.round(this.kgs * 100) / 100;
      this.stone = Math.round(this.stone * 100) / 100;
    }
    else {
      this.stone = this.kgs * 0.15747;
      this.pounds = this.kgs / 0.4536;
      this.pounds = this.pounds % 14;
      this.stone = Math.round(this.stone * 100) / 100;
      this.pounds = Math.round(this.pounds * 100) / 100;
    }
    this.stone= this.stone-(this.pounds*0.071429)
  }

  heightConversion(id) {
    this.heightOption = id;

    if (this.heightOption === "inches") {
      this.metres = this.inches * 0.0254;
      this.feet = this.inches / 12;
      this.metres = Math.round(this.metres * 100) / 10000;
    }

    else if (this.heightOption === "feet") {
      this.metres = this.feet * 0.3048;
      this.inches = this.feet * 12.;
      this.metres = Math.round(this.metres * 100) / 10000;
      this.inches = Math.round(this.inches * 100) / 10000.0;
    }

    // else its kgs
    else {
      this.feet = this.metres * 3.28084;
      this.inches = this.feet * 12;
      this.inches = Math.round(this.inches * 100) / 10000.0;
      this.feet = Math.round(this.feet * 100) / 10000;
    }
  }

  BMIcalculation() {
    this.bmi = this.kgs / (this.metres * this.metres);
    this.bmi = Math.round(this.bmi * 100) / 100;

    if (this.bmi >= 25) {
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Overweight Range";
    }

    else if (this.bmi >= 18 && this.bmi < 25) { 
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.BMIrange = "Normal Range";
    } 

    else if (this.bmi >= 0 && this.bmi < 18) {
    this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
    this.BMIrange = "Underweight Range";
    }

    // else statement with error message for invalid values 
    else {
      this.message = "Values must be entered to perform calculation!";
    }
  }

}
