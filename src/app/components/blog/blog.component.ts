import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pastEvents } from '../../../assets/data/past-events';
import { Event } from "src/app/models/event.interface";

@Component({
  selector: 'amk-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  pastEvents: Event[] = pastEvents;
  showLimit: number = 6;

  get visibleEvents(): Event[] {
    return this.pastEvents.slice(0, this.showLimit);
  }

  showAllPastEvents() {
    this.showLimit = this.pastEvents.length;
  }
}
