import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'amk-header',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  providers: [ThemeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  navigationItems = [
    { path: '/about', label: 'About' },
    {path: '/events', label: 'Events'},
    { path: '/blog', label: 'Blog' },
    { path: '/team', label: 'Team' }
  ];

  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
    //set theme 
    this.setCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.changeTheme(this.isDarkTheme ? 'light' : 'dark');
  }

  setCurrentTheme() {
    this.themeService.setCurrentTheme(localStorage.getItem('theme') || 'system');
    this.isDarkTheme = this.themeService.currentTheme === 'dark';
  }
}
