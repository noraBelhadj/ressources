import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const loginRoutes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', pathMatch:'full', component:LoginComponent},

]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class LoginRoutingModule{}
