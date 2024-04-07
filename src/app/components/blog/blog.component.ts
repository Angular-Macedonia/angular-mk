import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogPost } from '../../models/blog-post.interface';
import { BlogPosts } from '../../../../data/blogs';

@Component({
  selector: 'amk-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  blogPosts: BlogPost[] = BlogPosts;
  showLimit: number = 6;

  get visibleBlogs(): BlogPost[] {
    return this.blogPosts.slice(0, this.showLimit);
  }

  showAllPastEvents() {
    this.showLimit = this.blogPosts.length;
  }
}
