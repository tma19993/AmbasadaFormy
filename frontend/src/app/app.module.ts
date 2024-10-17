import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './sites/welcomePage/welcomePage.component';
import { LoginComponent } from './sites/login/login.component';
import { RegisterComponent } from './sites/register/register.component';
import { FormsModule } from '@angular/forms';
import { AFButtonModule } from 'src/stories/components/button/button.module';
import { InputModule } from 'src/stories/components/input/input.module';
import { AFTileModule } from 'src/stories/components/tile/tile.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterModule } from 'src/stories/components/footer/footer.module';
import { HomePageComponent } from './sites/homePage/homePage.component';
import { AfCheckboxModule } from "../stories/components/checkbox/checkbox.module";
import { AFRadiobuttonModule } from "../stories/components/radiobutton/radiobutton.module";
import { MessagesModule } from 'primeng/messages';
import { AfMessagesModule } from 'src/stories/components/messages/messages.module';
import { AfPasswordModule } from 'src/stories/components/password/password.module';
import { AfMessageService } from './services/message.service';
import { MessageService } from 'primeng/api';
import { LanguageChangerModule } from "../stories/components/languageChanger/languageChanger.module";
import { MenuStaticModule } from "../stories/components/menuStatic/menuStatic.module";
import { GymPassComponent } from './sites/gym-pass/gym-pass.component';
import { ProfileComponent } from './sites/profile/profile.component';
import { BlogComponent } from './sites/blog/blog.component';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
    declarations: [
        AppComponent,
        WelcomePageComponent,
        LoginComponent,
        RegisterComponent,
        HomePageComponent,
        GymPassComponent,
        ProfileComponent,
        BlogComponent,
    ],
    providers: [AfMessageService, MessageService],
    bootstrap: [AppComponent],
    imports: [
        PaginatorModule,
        AfPasswordModule,
        AfMessagesModule,
        MessagesModule,
        FooterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AfCheckboxModule,
        AFButtonModule,
        InputModule,
        AFTileModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (handler: HttpClient) => { return new TranslateHttpLoader(handler, './assets/i18n/', '.json'); },
                deps: [HttpClient]
            }
        }),
        AFRadiobuttonModule,
        LanguageChangerModule,
        MenuStaticModule
    ]
})
export class AppModule { }
