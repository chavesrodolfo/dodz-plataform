import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { BlogComponent } from './index';

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
})

export class BlogModule { }
