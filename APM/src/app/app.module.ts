import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from './home/welcome.component';
import { AppComponent } from './app.component';
import {ProductListComponent} from './Products/product-list.components';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
