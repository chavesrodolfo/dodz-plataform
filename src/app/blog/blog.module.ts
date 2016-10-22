import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { BlogComponent, PostsResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
  ],
  exports: [
    BlogComponent,
  ],
  providers: [
    PostsResolver,
  ]
})

export class BlogModule { }
