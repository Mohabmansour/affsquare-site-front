import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class PagesModule { }
