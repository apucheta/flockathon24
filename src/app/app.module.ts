import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule,FormsModule, ReactiveFormsModule, SharedModule, HttpClientModule],
  providers: [],
})
export class AppModule {}
