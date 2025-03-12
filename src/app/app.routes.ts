import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  /*{
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },*/

  {
    path: 'form',
    //pathMatch: 'full',
    loadComponent: () => import('./page/form/form.component').then((m) => m.FormComponent)
  },
  {
    path: 'second',
    //pathMatch: 'full',
    loadComponent: () => import('./page/form2/form2.component').then((m) => m.Form2Component)
  },
  {
    path:'',
    component: HomeComponent
  },


/*
  {
    path:'**',
    component: Form2Component
  }*/
];

@NgModule({  imports: [RouterModule.forRoot(routes)],  exports: [RouterModule]})
export class AppRoutingModule { }
