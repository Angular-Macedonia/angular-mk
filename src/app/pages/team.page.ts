import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
   <p>team</p>
  `,
  styles: [
    `
     
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeamPage {
  readonly members: any[] = [
    {
      name: 'Marko Stanimirović',
      headline:
        'Principal Frontend Engineer at SMG<br/>NgRx Core Team • GDE in Angular',
      photoUrl: '/people/marko-stanimirovic.jpg',
      twitterUrl: 'https://twitter.com/MarkoStDev/',
      linkedinUrl: 'https://linkedin.com/in/markostanimirovic/',
      githubUrl: 'https://github.com/markostanimirovic',
    }
  ];
}
