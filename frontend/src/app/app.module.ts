import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpLoaderFactory } from 'src/app/core/utils/http-loader-factory';
import { AppComponent } from './app.component';
import { AfMessageService } from './core/services';

import { DatePipe } from '@angular/common';
import { CoreModule } from './core/core.module';

import { AFFooterComponent } from './core/components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { AFValidationMessageComponent } from './shared/components/validation-message/validation-message.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { SpinnerComponent } from './core/components/spinner/spinner.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        SpinnerComponent,
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        AFValidationMessageComponent,
        AFFooterComponent,
        CoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        AfMessageService,
        MessageService,
        DialogService,
        DatePipe,
        provideAnimations(),
        provideHttpClient(withInterceptors([spinnerInterceptor])),


    ]
})
export class AppModule { }
