import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageChangerComponent } from './languageChanger.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({ declarations: [
        LanguageChangerComponent
    ],
    exports: [
        LanguageChangerComponent
    ], imports: [CommonModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (handler: HttpClient) => { return new TranslateHttpLoader(handler, './assets/i18n/', '.json'); },
                deps: [HttpClient]
            }
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LanguageChangerModule { }
