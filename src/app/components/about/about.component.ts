import {   ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'amk-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: `
    .fade-left {
      opacity: 0;
      animation: fadeInLeft 1s forwards;
    }

    .fade-right {
      opacity: 0;
      animation: fadeInRight 1s forwards;
    }

    .delay-1 {
      animation-delay: 0.5s;
    }

    .delay-2 {
      animation-delay: 1s;
    }

    .delay-3 {
      animation-delay: 1.5s;
    }

    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-45px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(45px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

}
