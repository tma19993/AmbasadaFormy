import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AFButtonModule } from 'src/stories/components/button/button.module';
import { InputModule } from 'src/stories/components/input/input.module';
import { AFTileModule } from 'src/stories/components/tile/tile.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FooterModule } from 'src/stories/components/footer/footer.module';
import { AFRadiobuttonModule } from "../stories/components/radiobutton/radiobutton.module";
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
import { AFProfileMenuModule } from "../stories/components/profile-menu/profile-menu.module";
import { HttpLoaderFactory } from 'src/shared/untils';
import { AvatarModule } from 'primeng/avatar';
import { TrainersComponent } from './sites/trainers/trainers.component';
import { AdminPageComponent } from './sites/profile/admin-page/admin-page.component';
import { AfInputTextareaModule } from 'src/stories/components/inputTextarea/inputtextarea.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { NewPostFormComponent } from './features/components';
import { AFPhotoUploaderModule } from 'src/stories/components/photo-uploader/photo-uploader.module';
@NgModule({
  declarations: [
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
    RegisterComponent
  ],
  providers: [AfMessageService, MessageService, DialogService],
  bootstrap: [AppComponent],
  imports: [
    AFPhotoUploaderModule,
    AvatarModule,
    ReactiveFormsModule,
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
    DynamicDialogModule,
    AFButtonModule,
    InputModule,
    AFTileModule,
    AfInputTextareaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AFRadiobuttonModule,
    LanguageChangerModule,
    MenuStaticModule,
    AFProfileMenuModule
  ]
})
export class AppModule { }
