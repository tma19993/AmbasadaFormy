import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpLoaderFactory } from 'src/app/core/untils/http-loader-factory';
import { AppComponent } from './app.component';
import { AfMessageService } from './core/services';

import { AFPreviousRouteService } from './core/services/previous-route/previous-route.service';
import { DatePipe } from '@angular/common';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AFFooterComponent } from './core/components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { AFValidationMessageComponent } from './shared/components/validation-message/validation-message.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AFValidationMessageComponent,
        AuthModule,
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
        AFPreviousRouteService,
        DialogService,
        DatePipe,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
