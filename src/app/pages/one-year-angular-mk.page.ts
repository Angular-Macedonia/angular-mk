import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  OneYearAngularMacedoniaEvent
} from '../components/one-year-angular-macedonia-event/one-year-angular-macedonia-event.component';

@Component({
  selector: 'amk-event-2024',
  standalone: true,
  template: `<one-year-angular-mk />`,
  imports: [
    OneYearAngularMacedoniaEvent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OneYearAngularMkPage {

}
