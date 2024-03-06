import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: string = '';
  constructor() { }

  setCurrentTheme(currentTheme: string) {
    this.currentTheme = currentTheme;
    this.changeTheme(this.currentTheme);
  }

  changeTheme(theme: string): void {
    document.documentElement.classList.remove('light', 'dark');
    
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor ='#111827';
        this.currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        document.documentElement.classList.add('light');
        document.body.style.backgroundColor ='#ffffff';
        this.currentTheme = 'light';
        localStorage.setItem('theme', 'light');
        break;
      default:
        document.documentElement.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        localStorage.removeItem('theme')
        this.currentTheme = 'system';
        break;
    }
  }
}
