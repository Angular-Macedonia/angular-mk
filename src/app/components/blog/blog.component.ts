import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'amk-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  showLimit: number = 6;
  pastEvents: any[] = [
    { 
      title: 'Angular Workshop',
      description: 'Join us for an intensive Angular workshop covering advanced topics.',
      date: 'Wed, Feb 28, 2024, 6:00 PM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Conference',
      description: 'The largest Angular conference of the year featuring expert speakers.',
      date: 'Thu, Mar 15, 2024, 7:30 PM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Meetup',
      description: 'Connect with other Angular enthusiasts and discuss the latest trends.',
      date: 'Sat, Apr 6, 2024, 10:00 AM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Hackathon',
      description: 'Participate in a collaborative Angular coding event and win prizes.',
      date: 'Sat, May 18, 2024, 1:00 PM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Webinar',
      description: 'Learn about the newest Angular features and best practices.',
      date: 'Tue, Jun 11, 2024, 4:00 PM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Workshop 2',
      description: 'Another opportunity to attend our popular Angular workshop.',
      date: 'Fri, Jul 26, 2024, 9:00 AM CET', 
      link: '#' 
    },
    { 
      title: 'Angular Workshop 2',
      description: 'Another opportunity to attend our popular Angular workshop.',
      date: 'Fri, Jul 26, 2024, 9:00 AM CET', 
      link: '#' 
    }
  ];

  showAllPastEvents() {
    this.showLimit = this.pastEvents.length;
  }

  get visibleEvents(): any[] {
    return this.pastEvents.slice(0, this.showLimit);
  }
}
