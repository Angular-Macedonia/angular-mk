import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'amk-header',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, NgClass, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [
    ThemeService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  navigationItems = [
    { path: '/', label: 'About', },
    { path: '/', label: 'Events' },
    // { path: '.', label: 'Blog' },
    { path: '/team', label: 'Team' },
    { path: '/positions', label: 'Positions' }
  ];

  visible = input<boolean>(true);
  toggleNav = signal(false);

  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
    //set theme
    this.setCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.changeTheme(this.isDarkTheme ? 'light' : 'dark');
  }

  setCurrentTheme() {
    if (typeof localStorage !== 'undefined') {
      this.themeService.setCurrentTheme(localStorage.getItem('theme') || 'light');
      this.isDarkTheme = this.themeService.currentTheme === 'dark';
    }
  }
}
