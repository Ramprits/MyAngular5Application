import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent, BookComponent, CustomerComponent, CustomerDetailComponent,
  DashboardComponent, FruitComponent, AddCustomerComponent, EmployeeComponent
} from './components/index';
import { AuthorComponent } from './components/author/author.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

const routes: Routes = [

  { path: 'AddNewCustomer', component: AddCustomerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BookComponent },
  { path: 'books/:bookId', component: BookComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:customerId', component: CustomerDetailComponent },
  { path: 'fruits', component: FruitComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
