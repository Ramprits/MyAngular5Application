import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const UserRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];
