import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/index';
import { CampComponent } from './components/camp/camp.component';


const routes: Routes = [

  { path: 'camps', component: CampComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
