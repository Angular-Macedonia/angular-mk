import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'amk-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  providers: [ThemeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  navigationItems = [
    { path: '.', label: 'About', },
    { path: '.', label: 'Events' },
    // { path: '.', label: 'Blog' },
    { path: '/team', label: 'Team' }
  ];
  @Input() visible = false;

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
