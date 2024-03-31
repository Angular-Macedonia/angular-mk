import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PastEvents } from '../../../assets/data/past-events';
import { Event } from "src/app/models/event.interface";
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'amk-event-details',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './event-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailsComponent {
  pastEvents: Event[] = PastEvents;
  showLimit: number = 6;

  showAllPastEvents() {
    this.showLimit = this.pastEvents.length;
  }

  get visibleEvents(): any[] {
    return this.pastEvents.slice(0, this.showLimit);
  }
}
