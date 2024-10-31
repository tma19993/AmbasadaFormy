import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/stories/components/input/input.module';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FooterModule } from 'src/stories/components/footer/footer.module';
import { MessagesModule } from 'primeng/messages';
import { AfMessagesModule } from 'src/stories/components/messages/messages.module';
import { AfPasswordModule } from 'src/stories/components/password/password.module';
import { AfMessageService } from './features/services/message.service';
import { MessageService } from 'primeng/api';
import { LanguageChangerModule } from "../stories/components/languageChanger/languageChanger.module";
import { MenuStaticModule } from "../stories/components/menuStatic/menuStatic.module";
import { PaginatorModule } from 'primeng/paginator';
import { AfCheckboxModule } from 'src/stories/components/checkbox/checkbox.module';
import { WelcomePageComponent, LoginComponent, RegisterComponent, HomePageComponent, GymPassComponent, MyProfileComponent, BlogComponent, ProfileComponent, GymPassesComponent, PersonalTrainerComponent, DietsComponent } from './sites';
import { HttpLoaderFactory } from 'src/shared/untils';
import { AvatarModule } from 'primeng/avatar';
import { TrainersComponent } from './sites/trainers/trainers.component';
import { AdminPageComponent } from './sites/profile/admin-page/admin-page.component';
import { AfInputTextareaModule } from 'src/stories/components/inputTextarea/inputtextarea.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { NewPostFormComponent } from './features/components';
import { PostDetailsComponent } from './features/components/post-details/post-details.component';
import { OrderGymPassComponent } from './features/components/order-gym-pass/order-gym-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AFTileComponent,AFTableComponent, AFGymPassCardComponent, AFGymPassInfoComponent, AFProfileMenuComponent, AFButtonComponent, AFPhotoUploaderComponent } from 'src/stories/components';
import { PasswordChangerComponent } from './features/components/password-changer/password-changer.component';
import { ProfileDataEditorComponent } from './features/components/profile-data-editor/profile-data-editor.component';
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
