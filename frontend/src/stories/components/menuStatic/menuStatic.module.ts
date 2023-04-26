import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuStaticComponent } from './menuStatic.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageChangerModule } from "../languageChanger/languageChanger.module";

@NgModule({
    declarations: [
        MenuStaticComponent
    ],
    exports: [
        MenuStaticComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (handler: HttpClient) => { return new TranslateHttpLoader(handler, './assets/i18n/', '.json'); },
                deps: [HttpClient]
            }
        }),
        LanguageChangerModule
    ]
})
export class MenuStaticModule { }
