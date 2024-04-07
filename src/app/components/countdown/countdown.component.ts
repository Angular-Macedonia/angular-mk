import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import {  Observable, interval, map  } from 'rxjs';
export interface CountDownModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  countdownDate: Date = new Date('2024-05-17T18:00:00');
 
  countdown$: Observable<CountDownModel> = interval(1000).pipe(
    map( _ => {
      const now = new Date().getTime();
      const distance = this.countdownDate.getTime() - now;
   
      return distance >= 0 ? {
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
        minutes: Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0),
        seconds: Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0)
      } : {
        days: 0 ,
        hours: 0 ,
        minutes: 0 ,
        seconds: 0
      }
    })
  )
}
