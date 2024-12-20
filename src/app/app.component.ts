import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { fromEvent, throttleTime } from 'rxjs';
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <main #scroller>
      <router-outlet/>
    </main>
  `,
  styles: [
    `
      amk-footer {
        display: block;
        height: 1vh;
      }
    `,
  ]
})
export class AppComponent implements OnInit {

  scrollTop = 0;
  hidden = false;

  constructor(
  ) { }

  ngOnInit(): void {
    initFlowbite();
    inject();
    injectSpeedInsights();
    fromEvent(document, 'scroll').pipe(
      throttleTime(150),
    ).subscribe({
      next: () => {
        const st = document.documentElement.scrollTop;
        if (st > this.scrollTop + 85) {
          this.hidden = true;
        } else if (st < this.scrollTop - 85) {
          this.hidden = false;
        }
        this.scrollTop = st;
      }
    })
  }
}
