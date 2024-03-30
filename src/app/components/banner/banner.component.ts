import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';



@Component({
  selector: 'amk-banner',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  @ViewChild("typewrite1", {static: true, read: ElementRef}) heading1!: ElementRef;
  visible: boolean = false;

    ngOnInit(): void {
      // @ts-ignore
      const heading1 = new Typewriter(this.heading1.nativeElement, {
        loop: false,
        delay: 75,
        cursor: ''
      });
      heading1
        .pauseFor(200)
        .typeString('Unite. ')
        .pauseFor(200)
        .typeString('Learn. ')
        .pauseFor(200)
        .typeString('Innovate. ')
        .pauseFor(150)
        .typeString(`<h2
                  #typewrite2
                  class="text-gray-900 dark:text-white text-2xl md:text-4xl font-bold">Welcome to our <span
                        style='
                        --angular-gradient: linear-gradient(to right, #ef4444, #fb923c, #f6e05e);
                        -webkit-background-clip: text;
                        color: transparent;
                        background-image: var(--angular-gradient);
                        '
                        >Angular</span> Meetup Community!</h2>`)
        .start();
        this.visible = true;
    }

}
