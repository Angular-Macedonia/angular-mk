import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { fromEvent, throttleTime } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <amk-header [visible]='!hidden'/>
    <main #scroller>
      <router-outlet/>
    </main>
    <amk-footer/>
  `,
  styles: [
    `
      :host {
        margin: 1.25rem;
        padding: 0;
      }

      main {
        margin-top: 4rem;
        flex: 1;
      }

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
  ) {}

  ngOnInit(): void {
    initFlowbite();
    fromEvent(document, 'scroll').pipe(
      throttleTime(150),
    ).subscribe({
      next: () => {
        const st = document.documentElement.scrollTop;
        this.hidden = st - 85 > this.scrollTop;
        this.scrollTop = st;
      }
    })
  }
}
