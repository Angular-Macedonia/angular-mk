import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'amk-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  socialMediaLinks = [
    { name: 'YouTube', icon: 'bi bi-youtube', url: 'https://www.youtube.com/channel/UCTztU8FSqIj0mN9XrRhJbhw' },
    { name: 'Meetup', icon: 'bi bi-calendar-event', url: 'https://www.meetup.com/angular-macedonia/' },
    { name: 'GitHub', icon: 'bi bi-github', url: 'https://github.com/Angular-Macedonia' },
    { name: 'LinkedIn', icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/company/angular-macedonia/' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/angularmacedonia/' },
    { name: 'Discord', icon: 'bi bi-discord', url: 'https://discord.gg/DvfP5eUxBR' },
  ];
}
