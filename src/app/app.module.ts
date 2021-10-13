import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web'

import { APP_ROUTE } from './app.routes';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';

export function playerFactory() { return player; }
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTE,
    FormsModule,
    BrowserModule,
    ScrollToModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [ConfirmationService, ScrollToService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
