import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  HomeComponent, BookComponent, FruitService, FruitComponent, BookService, DashboardComponent,
  CustomerComponent, CustomerService, CustomerDetailComponent, AddCustomerComponent, ProductComponent, EmployeeService
} from './components/index';
import {
  MenuModule, PanelModule, ChartModule, CheckboxModule, OverlayPanelModule, InputTextModule,
  ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule,
  FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule,
  RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule,
  ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService,
  ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule
} from 'primeng/primeng';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { FielderrorsComponent } from './core/fielderrors/fielderrors.component';
import { CustomerNewService } from './components/customer/customer-new.service';
import { HttpModule } from '@angular/http';
import { LoggerService } from './core/index';
import { AuthorComponent, AuthorService } from './components/author/index';
import { CountryService } from './core/country.service';
import { ConfigService, Error404Component } from './shared/index';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthService } from './components/user/auth.service';
Raven
  .config('https://f88b3d205a9042d5b1a069be1baf9c31@sentry.io/241753')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError);
  }
}
export function provideErrorHandler() {
  if (environment.production) {
    return new RavenErrorHandler();
  } else {
    return new ErrorHandler();
  }
}


@NgModule({
  declarations: [
    AppComponent, HomeComponent, BookComponent, FielderrorsComponent, DashboardComponent,
    CustomerComponent, CustomerDetailComponent, FruitComponent, ProductComponent,
    AddCustomerComponent, Error404Component, LoginComponent, AuthorComponent, EmployeeComponent, AddEmployeeComponent, LoginComponent],
  imports: [
    HttpModule, CheckboxModule, FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, MenuModule, PanelModule, OverlayPanelModule, ChartModule,
    InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule,
    RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule,
    SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule,
    ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmDialogModule, GrowlModule, DragDropModule,
    GalleriaModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule.enablePersistence()],

  providers: [{ provide: ErrorHandler, useFactory: provideErrorHandler },
    BookService, CustomerService, FruitService, CustomerNewService,
    LoggerService, ConfirmationService, AuthService, AuthorService, CountryService, ConfigService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
