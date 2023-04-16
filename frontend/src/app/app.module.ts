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


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AFButtonModule,
    InputModule,
    AFTileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
