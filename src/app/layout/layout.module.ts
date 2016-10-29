import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module'
import { FooterComponent, HeaderComponent, TinyComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    TinyComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TinyComponent,
  ],
})

export class LayoutModule { }
