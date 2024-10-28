import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuStaticComponent } from './menuStatic.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageChangerModule } from "../languageChanger/languageChanger.module";

@NgModule({ declarations: [
        MenuStaticComponent
    ],
    exports: [
        MenuStaticComponent
    ], imports: [CommonModule,
        TranslateModule.forChild(),
        LanguageChangerModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class MenuStaticModule { }
