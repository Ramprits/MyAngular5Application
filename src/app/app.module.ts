import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent, DashboardComponent } from './components/index';
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
import { HttpModule } from '@angular/http';
import { LoggerService } from './core/index';
import { CountryService } from './core/country.service';
import { ConfigService, Error404Component } from './shared/index';

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
    AppComponent, HomeComponent, FielderrorsComponent, DashboardComponent,
    Error404Component],
  imports: [
    HttpModule, CheckboxModule, FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, MenuModule, PanelModule, OverlayPanelModule, ChartModule,
    InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule,
    RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule,
    SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule,
    ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmDialogModule, GrowlModule, DragDropModule,
    GalleriaModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule.enablePersistence()],

  providers: [{ provide: ErrorHandler, useFactory: provideErrorHandler },
    LoggerService, ConfirmationService, CountryService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
