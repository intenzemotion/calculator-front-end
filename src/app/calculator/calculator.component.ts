import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { Calculator } from './calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  value1: number;
  unit1: string;
  value2: number;
  unit2: string;
  operation: string;
  result: number;

  constructor(private calculatorService: CalculatorService) { }

  calculate() {

    // we get all the value and put them into an object, for now we call it "request"
    const request: Calculator = {
      id: null,
      result: null,
      value1: this.value1,
      unit1: this.unit1,
      value2: this.value2,
      unit2: this.unit2,
      operation: this.operation
    };

    this.calculatorService.calculate(request).subscribe(
      response => {
        this.result = response.result;
      },
      error => {
        console.error('Error calculating:', error);
      }
    );
  }
}
