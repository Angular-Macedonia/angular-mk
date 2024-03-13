import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pastEvents } from '../../../assets/data/past-events';
import { Event } from "src/app/models/event.interface";

@Component({
  selector: 'amk-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailsComponent {
  pastEvents: Event[] = pastEvents;
  showLimit: number = 6;

  showAllPastEvents() {
    this.showLimit = this.pastEvents.length;
  }

  get visibleEvents(): any[] {
    return this.pastEvents.slice(0, this.showLimit);
  }
}
