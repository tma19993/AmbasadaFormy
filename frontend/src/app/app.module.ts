import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { FooterModule } from 'src/stories/components/footer/footer.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FooterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader:{
          provide: TranslateLoader,
          useFactory: (handler: HttpClient) => { return new TranslateHttpLoader(handler, './assets/i18n/', '.json');},
          deps:[HttpClient]
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
