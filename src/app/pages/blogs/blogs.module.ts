import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogdetailsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
