import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentcomponentComponent } from './developmentcomponent/developmentcomponent.component';
import { WorkdetailComponent } from './workdetail/workdetail.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = ([

  { path:'home', component:HomeComponent},
  { path:'gallery', component:GalleryComponent},
  { path:'development', component:WorkdetailComponent},
  {path:'project', component:DevelopmentcomponentComponent},
  { path:'aboutus', component:AboutComponent},
  {path:'',  redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:ContactComponent},
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
