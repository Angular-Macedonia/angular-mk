import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {
  countdownDate: Date = new Date('2024-05-17T18:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdown: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.calculateCountdown();
    this.countdown = setInterval(() => {
      this.calculateCountdown();
      this.cdRef.detectChanges();
    }, 1000);
  }

  calculateCountdown() {
    const now = new Date().getTime();
    const distance = this.countdownDate.getTime() - now;

    if (distance >= 0) {
      this.days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
      this.hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
      this.minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
      this.seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }
}
