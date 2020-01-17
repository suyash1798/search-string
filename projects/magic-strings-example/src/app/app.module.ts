import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MagicStringsModule} from '../../../magic-strings/src/lib/magic-strings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicStringsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
