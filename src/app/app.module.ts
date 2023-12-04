import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OAuthModule } from 'angular-oauth2-oidc';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialAngularModule } from './components/shared/material-angular/material-angular.module';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EditArticulosComponent,
    ListArticulosComponent,
    NavbarComponent,
    MensajeConfirmacionComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialAngularModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
