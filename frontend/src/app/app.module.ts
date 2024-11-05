import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { HttpLoaderFactory } from 'src/shared/untils';
import { AFTableComponent, AFTileComponent, AFPhotoUploaderComponent, AFButtonComponent, AFProfileMenuComponent, AFGymPassCardComponent, AFGymPassInfoComponent } from 'src/stories/components';
import { AfCheckboxModule } from 'src/stories/components/checkbox/checkbox.module';
import { FooterModule } from 'src/stories/components/footer/footer.module';
import { InputModule } from 'src/stories/components/input/input.module';
import { AfInputTextareaModule } from 'src/stories/components/inputTextarea/inputtextarea.module';
import { LanguageChangerModule } from 'src/stories/components/languageChanger/languageChanger.module';
import { MenuStaticModule } from 'src/stories/components/menuStatic/menuStatic.module';
import { AfMessagesModule } from 'src/stories/components/messages/messages.module';
import { AfPasswordModule } from 'src/stories/components/password/password.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfMessageService } from './core/services';
import { OrderGymPassComponent, NewPostFormComponent, PostDetailsComponent, PasswordChangerComponent, ProfileDataEditorComponent } from './features/dialogs';
import { WelcomePageComponent, LoginComponent, HomePageComponent, GymPassComponent, MyProfileComponent, GymPassesComponent, PersonalTrainerComponent, DietsComponent, TrainersComponent, AdminPageComponent, BlogComponent, RegisterComponent } from './sites';
import { ProfileComponent } from './sites/profile/profile.component';

@NgModule({ declarations: [
    OrderGymPassComponent,
        AppComponent,
        WelcomePageComponent,
        LoginComponent,
        HomePageComponent,
        GymPassComponent,
        MyProfileComponent,
        ProfileComponent,
        GymPassesComponent,
        PersonalTrainerComponent,
        DietsComponent,
        TrainersComponent,
        AdminPageComponent,
        NewPostFormComponent,
        BlogComponent,
        RegisterComponent,
        PostDetailsComponent,
        PasswordChangerComponent,
        ProfileDataEditorComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        AFTableComponent,
        AFTileComponent,
        AFPhotoUploaderComponent,
        AvatarModule,
        ReactiveFormsModule,
        PaginatorModule,
        AfPasswordModule,
        AfMessagesModule,
        MessagesModule,
        FooterModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AfCheckboxModule,
        DynamicDialogModule,
        AFButtonComponent,
        InputModule,
        AfInputTextareaModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LanguageChangerModule,
        MenuStaticModule,
        AFProfileMenuComponent,
        AFGymPassCardComponent,
        BrowserAnimationsModule, 
        AFGymPassInfoComponent], 
        providers: [
            AfMessageService, 
            MessageService, 
            DialogService, 
            provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
