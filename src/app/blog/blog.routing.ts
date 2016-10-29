import { Routes } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { BlogComponent } from './blog.component';
import { PostsResolver } from './resolves/';

export const BlogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [
      AuthenticationGuard,
    ],
    resolve: {
      posts: PostsResolver
    }
  },
];
