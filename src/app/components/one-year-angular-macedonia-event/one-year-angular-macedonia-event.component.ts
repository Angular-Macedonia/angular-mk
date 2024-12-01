import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'one-year-angular-mk',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './one-year-angular-macedonia-event.component.html',
  styleUrl: './one-year-angular-macedonia-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneYearAngularMacedoniaEvent implements AfterViewInit {

  scrollIndicatorVisible = signal(true);

  @ViewChild('context') scrollContainer!: ElementRef;

  socialMediaLinks = [
    { name: 'YouTube', icon: 'bi bi-youtube', url: 'https://www.youtube.com/channel/UCTztU8FSqIj0mN9XrRhJbhw' },
    { name: 'Meetup', icon: 'bi bi-calendar-event', url: 'https://www.meetup.com/angular-macedonia/' },
    { name: 'GitHub', icon: 'bi bi-github', url: 'https://github.com/Angular-Macedonia' },
    { name: 'LinkedIn', icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/company/angular-macedonia/' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/angularmacedonia/' }
  ];

  ngAfterViewInit(): void {
    const container = this.scrollContainer.nativeElement;
    container.addEventListener('scroll', this.onScroll.bind(this));
    this.checkScrollVisibility();
  }

  onScroll(): void {
    this.checkScrollVisibility();
  }

  private checkScrollVisibility(): void {
    const container = this.scrollContainer.nativeElement;
    const endViewport = container.scrollTop < (container.scrollHeight - (container.clientHeight * 2));
    if (endViewport) {
      this.scrollIndicatorVisible.set(true);
    } else {
      this.scrollIndicatorVisible.set(false);
    }
  }

}
