import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootorComponent } from './footor/footor.component';
import { ContactComponent } from './contact/contact.component';
import { WorkdetailComponent } from './workdetail/workdetail.component';
import { DevelopmentcomponentComponent } from './developmentcomponent/developmentcomponent.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FootorComponent,
    ContactComponent,
    WorkdetailComponent,
    DevelopmentcomponentComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
