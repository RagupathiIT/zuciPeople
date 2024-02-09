import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{
  dateCalculatorForm: FormGroup;
  result: string = '';
  isCheckIn: boolean = true;
  timerRunning: boolean = false;
  timerInterval: any;
  elapsedTime: number = 0;
  checkedOutTime: number = 0;
 
  constructor(private fb: FormBuilder) {
    this.dateCalculatorForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }
 
  ngOnInit() {}
 
  toggleCheckInOut() {
    if (this.isCheckIn) {
      console.log('Check In!');
      this.startTimer();
    } else {
      console.log('Check Out!');
      this.checkedOutTime = this.elapsedTime;
      this.pauseTimer();
    }
 
    this.isCheckIn = !this.isCheckIn;
    this.result = '';
  }
 
  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime++;
        console.log('Timer is running...', this.elapsedTime);
      }, 1000);
    }
  }
 
  pauseTimer() {
    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
    }
  }
 
  resumeTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime++;
        console.log('Timer is running...', this.elapsedTime);
      }, 1000);
    }
  }
 
  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }
 
  pad(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
 
  calculateDateDifference() {
  }

  
}
