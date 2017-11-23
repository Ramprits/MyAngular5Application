import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MenuModule, PanelModule, InputTextModule, ButtonModule, DropdownModule, DataTableModule, ContextMenuModule
} from 'primeng/primeng';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { FielderrorsComponent } from './core/fielderrors/fielderrors.component';
import { HttpModule } from '@angular/http';
import { LoggerService } from './core/index';
import { CountryService } from './core/country.service';
import { ConfigService, Error404Component } from './shared/index';
import { CampComponent } from './components/camp/camp.component';
import { CampService } from './components/camp/camp.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
    AppComponent, FielderrorsComponent, DashboardComponent,
    Error404Component,
    CampComponent],
  imports: [
    HttpModule, FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, MenuModule, PanelModule,
    InputTextModule, ButtonModule, DropdownModule, DataTableModule, ContextMenuModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule.enablePersistence()],

  providers: [{ provide: ErrorHandler, useFactory: provideErrorHandler },
    LoggerService, CountryService, ConfigService, CampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
