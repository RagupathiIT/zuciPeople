import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  dateCalculatorForm: FormGroup;
  result: string = '';
 
  constructor(private fb: FormBuilder) {
    this.dateCalculatorForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }
}
