import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { AFLanguageChangerComponent } from '../shared/components/language-changer/language-changer.component';
import { AFProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { SharedModule } from '../shared/shared.module';
import {
  AFAdminPageComponent,
  AFDietsComponent,
  AFGymPassesComponent,
  AFMyProfileComponent,
  AFPersonalTrainingComponent,
} from './pages';
import { AFButtonComponent } from '../shared/components/button/button.component';
import { AFPhotoUploaderComponent } from '../shared/components/photo-uploader/photo-uploader.component';

import { AFKnobComponent } from '../shared/components/knob/knob.component';
import { TransformStatisticTimePipe } from '../shared/pipes/transform-statistic-time.pipe';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import {
  AFEditPermissionsComponent,
  AFEditGymPassesComponent,
  AFEditBlogComponent,
  AFEditUserDataComponent,
  AFChangeUserPasswordComponent,
  AFGymPassRequestsComponent,
} from './pages/admin-page/dialogs';
import { AFAddDietComponent } from './pages/diets/dialogs/add-diet/add-diet.component';
import {
  PasswordChangerComponent,
  ProfileDataEditorComponent,
} from './pages/my-profile/dialogs';
import { AFAddTrainingComponent } from './pages/personal-training/dialogs/add-training/add-training.component';
import { AFCheckboxComponent } from '../shared/components/checkbox/checkbox.component';
import { AFMessagesComponent } from '../shared/components/messages/messages.component';
import { AFInputComponent } from '../shared/components/input/input.component';
import { AFTableComponent } from '../shared/components/table/table.component';
import { AFPasswordComponent } from '../shared/components/password/password.component';
import { OrderGymPassComponent } from './pages/gym-passes/dialogs/order-gym-pass/order-gym-pass.component';
import { AFGymPassCardComponent } from '../gym-pass/components';
import { AFInputTextareaComponent } from '../shared/components/inputTextarea/inputtextarea.component';
import { ActiveStatusPipe } from '../shared/pipes/active-status/active-status.pipe';
import { DietTileComponent } from "./pages/diets/components/diet-tile/diet-tile/diet-tile.component";
import { TrainingTileComponent } from './pages/personal-training/components/training-tile/training-tile.component';
import { DietStatusPipe } from '../shared/pipes/diet-status/diet-status.pipe';
import { TrainingStatusPipe } from '../shared/pipes/training-status/training-status.pipe';
import { RequestsTableComponent } from './pages/admin-page/dialogs/gym-pass-requests/requests-table/requess-table/requests-table.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AFPersonalTrainingComponent,
    AFMyProfileComponent,
    AFGymPassesComponent,
    AFDietsComponent,
    AFAdminPageComponent,
    PasswordChangerComponent,
    ProfileDataEditorComponent,
    AFAddTrainingComponent,
    AFAddDietComponent,
    AFEditPermissionsComponent,
    AFEditGymPassesComponent,
    AFEditBlogComponent,
    AFEditUserDataComponent,
    AFChangeUserPasswordComponent,
    AFGymPassRequestsComponent,
    OrderGymPassComponent,
    AFProfileMenuComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
    AFTileComponent,
    AFLanguageChangerComponent,
    AFButtonComponent,
    AFPhotoUploaderComponent,
    AFGymPassCardComponent,
    AFKnobComponent,
    TransformStatisticTimePipe,
    PrimengModule,
    AFCheckboxComponent,
    AFMessagesComponent,
    AFInputComponent,
    AFTableComponent,
    AFPasswordComponent,
    AFInputTextareaComponent,
    ActiveStatusPipe,
    DietTileComponent,
    TrainingTileComponent,
    DietStatusPipe,
    TrainingStatusPipe,
    RequestsTableComponent
  ],
  exports: [],
})
export class ProfileModule { }
