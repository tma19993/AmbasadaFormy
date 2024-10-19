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
        TranslateModule.forChild(),
        LanguageChangerModule
    ]
})
export class MenuStaticModule { }
