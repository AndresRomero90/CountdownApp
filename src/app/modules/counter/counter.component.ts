import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  public days: number = 10;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 2;

  private interval: any;

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.countdown();
  }

  decreaseSeconds(): void {
    if (this.seconds > 0) {
      this.seconds--;
    } else {
      this.seconds = 59;
      this.decreaseMinutes();
    }
  }

  decreaseMinutes(): void {
    if (this.minutes > 0) {
      this.minutes--;
    } else {
      this.minutes = 59;
      this.decreaseHours();
    }
  }

  decreaseHours(): void {
    if (this.hours > 0) {
      this.hours--;
    } else {
      this.hours = 23;
      this.decreaseDays();
    }
  }

  decreaseDays(): void {
    if (this.days > 0) {
      this.days--;
    }
  }

  countdown() {
    this.interval = setInterval(() => {
      this.decreaseSeconds();
    }, 1000);
  }

}
