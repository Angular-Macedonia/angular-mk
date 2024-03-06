import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BannerComponent } from "../components/banner/banner.component";
import { EventDetailsComponent } from "../components/event-details/event-details.component";
import { BlogComponent } from "../components/blog/blog.component";

@Component({
  standalone: true,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    BlogComponent
  ],
  template: `
    <amk-banner/>
    <amk-event-details/>
    <amk-blog/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {}