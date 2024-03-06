import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'amk-header',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  providers: [ThemeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  navigationItems: any = ['About', 'Blog', 'Team'];

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
