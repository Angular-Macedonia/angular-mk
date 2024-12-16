import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BannerComponent } from "../components/banner/banner.component";
import { EventDetailsComponent } from "../components/event-details/event-details.component";
import { BlogComponent } from "../components/blog/blog.component";
import { AboutComponent } from "../components/about/about.component";
import { HeaderComponent } from '../components/header/header.component';

@Component({
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    EventDetailsComponent,
    BlogComponent,
    HeaderComponent
  ],
  template: `
<!-- temp fix -->
    <amk-header [visible]='true'/>
    <amk-banner/>
    <amk-about id='about'/>
    <amk-event-details id='events'/>
    <!-- <amk-blog id='blog'/> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {}
