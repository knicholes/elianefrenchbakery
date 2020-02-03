import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'products', component: ProductListComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
