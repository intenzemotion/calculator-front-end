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

  constructor() { }

}
