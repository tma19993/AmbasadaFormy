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
import { AfCheckboxModule } from 'src/app/shared/components/checkbox/checkbox.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { AfInputTextareaModule } from 'src/app/shared/components/inputTextarea/inputtextarea.module';

import { AfMessagesModule } from 'src/app/shared/components/messages/messages.module';
import { AfPasswordModule } from 'src/app/shared/components/password/password.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfMessageService } from './core/services';
import { OrderGymPassComponent, NewPostFormComponent, PostDetailsComponent, PasswordChangerComponent, ProfileDataEditorComponent } from './features/dialogs';
import { WelcomePageComponent, LoginComponent, HomePageComponent, GymPassComponent,TrainersComponent, BlogComponent, RegisterComponent, AFMenuStaticComponent, AFProfileMenuComponent, AFGymPassCardComponent, AFGymPassInfoComponent, AFPersonalTrainerComponent, AFMyProfileComponent, AFLanguageChangerComponent, AFGymPassesComponent, AFFooterComponent, AFDietsComponent, AFAdminPageComponent } from './features/main-pages';
import { ProfileComponent } from './features/main-pages/profile/profile.component';
import { AFButtonComponent } from './shared/components/button/button.component';
import { AFPhotoUploaderComponent } from './shared/components/photo-uploader/photo-uploader.component';
import { AFTableComponent } from './shared/components/table/table.component';
import { AFTileComponent } from './shared/components/tile/tile.component';

@NgModule({ declarations: [
    OrderGymPassComponent,
        AppComponent,
        WelcomePageComponent,
        LoginComponent,
        HomePageComponent,
        GymPassComponent,
        AFMyProfileComponent,
        ProfileComponent,
        AFPersonalTrainerComponent,
        TrainersComponent,
        NewPostFormComponent,
        BlogComponent,
        RegisterComponent,
        PostDetailsComponent,
        PasswordChangerComponent,
        ProfileDataEditorComponent,
        AFProfileMenuComponent,
        AFMenuStaticComponent,
        AFLanguageChangerComponent,
        AFGymPassesComponent,
        AFGymPassInfoComponent,
        AFGymPassCardComponent,
        AFFooterComponent,
        AFDietsComponent,
        AFAdminPageComponent
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
        BrowserAnimationsModule, 
        ], 
        providers: [
            AfMessageService, 
            MessageService, 
            DialogService, 
            provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
