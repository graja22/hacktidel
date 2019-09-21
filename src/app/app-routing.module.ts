import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { BannerComponent } from './banner/banner.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path:"",
    component:BannerComponent
  },
  {
    path:"signin",
  component:SigninComponent
},
{
  path:"signup",
component:SignupComponent
},
{
  path:"banner",
  component:BannerComponent
},
{
  
    path:"banner/signup",
    component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
