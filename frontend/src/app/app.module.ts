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
import { HttpLoaderFactory } from 'src/app/core/untils/http-loader-factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfMessageService } from './core/services';
import { OrderGymPassComponent, NewPostFormComponent, PostDetailsComponent, PasswordChangerComponent, ProfileDataEditorComponent, AFAddDietComponent, AFChangeUserPasswordComponent, AFEditGymPassesComponent, AFEditPermissionsComponent, AFEditUserDataComponent, AFGymPassRequestsComponent } from './features/dialogs';
import { WelcomePageComponent, LoginComponent, HomePageComponent, GymPassComponent, TrainersComponent, BlogComponent, RegisterComponent, AFMenuStaticComponent, AFProfileMenuComponent, AFGymPassCardComponent, AFGymPassInfoComponent,  AFLanguageChangerComponent,  AFFooterComponent,  } from './features/main-pages';
import { ProfileComponent } from './features/main-pages/profile/profile.component';
import { AFButtonComponent } from './shared/components/button/button.component';
import { AFPhotoUploaderComponent } from './shared/components/photo-uploader/photo-uploader.component';
import { AFTableComponent } from './shared/components/table/table.component';
import { AFTileComponent } from './shared/components/tile/tile.component';
import { AFPasswordComponent } from './shared/components/password/password.component';
import { AFMessagesComponent } from './shared/components/messages/messages.component';
import { AFCheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { AFInputComponent } from './shared/components/input/input.component';
import { AFInputTextareaComponent } from './shared/components/inputTextarea/inputtextarea.component';
import { AFPreviousRouteService } from './core/services/previous-route/previous-route.service';
import { DatePipe } from '@angular/common';
import { AFMyProfileComponent, AFPersonalTrainerComponent, AFGymPassesComponent, AFDietsComponent, AFAdminPageComponent } from './features/profile-pages';
import { AFAddTrainingComponent } from './features/dialogs/add-training/add-training.component';
import { AFValidationMessageComponent } from './shared/components/validation-message/validation-message.component';
import { AFEditBlogComponent } from './features/dialogs/edit-blog/edit-blog.component';


@NgModule({
    declarations: [
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
        AFAdminPageComponent,
        AFAddTrainingComponent,
        AFAddDietComponent,
        AFEditPermissionsComponent,
        AFEditGymPassesComponent,
        AFEditBlogComponent,
        AFEditUserDataComponent,
        AFChangeUserPasswordComponent,
        AFGymPassRequestsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        AFPasswordComponent,
        AFValidationMessageComponent,
        AFMessagesComponent,
        AFCheckboxComponent,
        AFInputComponent,
        AFInputTextareaComponent,
        AFTableComponent,
        AFTileComponent,
        AFPhotoUploaderComponent,
        AvatarModule,
        ReactiveFormsModule,
        PaginatorModule,
        MessagesModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        DynamicDialogModule,
        AFButtonComponent,
        BrowserAnimationsModule,
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
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
