import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousPipePipe } from './marvellous-pipe.pipe';
import { AthsPipe } from './aths.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousPipePipe,
    AthsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
