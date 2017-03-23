import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostsResolver } from './resolves/';

export const BlogRoutes: Routes = [
  { path: 'blog', 
    component: BlogComponent, 
    canActivate: [AuthenticationGuard], 
    resolve: { posts: PostsResolver} 
  },
  { path: 'blog/post/:id',  component: BlogPostComponent },
  //{ path: 'blog/post/edit/:id',  component: BlogPostEditComponent }
];
