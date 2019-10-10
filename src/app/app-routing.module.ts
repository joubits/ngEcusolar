import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';



const app_routes: Routes = [
  //cada ruta que se va a tener... Menu principal
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },


];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
