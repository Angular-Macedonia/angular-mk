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

}
