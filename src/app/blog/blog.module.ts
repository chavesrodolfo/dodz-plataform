import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { LayoutModule } from './../layout/layout.module'
import { BlogComponent, BlogPostComponent, PostsResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
  ],
  declarations: [
    BlogComponent,
    BlogPostComponent,
  ],
  exports: [
    BlogComponent,
  ],
  providers: [
    PostsResolver,
  ]
})

export class BlogModule { }
