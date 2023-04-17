import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
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
})
export class FooterModule { }
