import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatToolbarModule,
          MatIconModule,
          MatCardModule,
          MatButtonModule,
          MatSidenavModule,
        } from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
