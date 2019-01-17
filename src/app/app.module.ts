import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule, PagesRoutingModule } from './pages';

import {
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // purchases
    StaticModule,
    SettingsModule,
    PagesModule,

    // app
    AppRoutingModule,

    // material
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,

    HttpClientModule,
    HttpModule,

    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
