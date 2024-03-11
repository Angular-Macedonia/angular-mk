import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'amk-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  socialMediaLinks = [
    { name: 'YouTube', icon: 'bi bi-youtube', url: '#' },
    { name: 'Email', icon: 'bi bi-envelope-at', url: '#' },
    { name: 'GitHub', icon: 'bi bi-github', url: '#' },
    { name: 'LinkedIn', icon: 'bi bi-linkedin', url: '#' }
  ];
}
