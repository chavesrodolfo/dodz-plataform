import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { LayoutModule } from './../layout/layout.module'
import { BlogComponent, PostsResolver } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
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
