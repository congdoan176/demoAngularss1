import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloFormComponent } from './hello-form/hello-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HelloForm1Component } from './hello-form1/hello-form1.component';
import { HelloListComponent } from './hello-list/hello-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
    HelloForm1Component,
    HelloListComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
