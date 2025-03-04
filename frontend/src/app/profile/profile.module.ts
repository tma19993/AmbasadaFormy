import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { AFLanguageChangerComponent } from '../shared/components/language-changer/language-changer.component';
import { AFProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { SharedModule } from '../shared/shared.module';
import { AFAdminPageComponent, AFDietsComponent, AFGymPassesComponent, AFMyProfileComponent, AFPersonalTrainerComponent } from './pages';
import { AFButtonComponent } from '../shared/components/button/button.component';
import { AFPhotoUploaderComponent } from '../shared/components/photo-uploader/photo-uploader.component';
import { AFGymPassCardComponent } from '../shared/components/gym-pass';
import { AFKnobComponent } from '../shared/components/knob/knob.component';
import { TransformStatisticTimePipe } from '../shared/pipes/transform-statistic-time.pipe';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { AFEditPermissionsComponent, AFEditGymPassesComponent, AFEditBlogComponent, AFEditUserDataComponent, AFChangeUserPasswordComponent, AFGymPassRequestsComponent } from './pages/admin-page/dialogs';
import { AFAddDietComponent } from './pages/diets/dialogs/add-diet/add-diet.component';
import { PasswordChangerComponent, ProfileDataEditorComponent } from './pages/my-profile/dialogs';
import { AFAddTrainingComponent } from './pages/personal-trainer/dialogs/add-training/add-training.component';
import { AFCheckboxComponent } from '../shared/components/checkbox/checkbox.component';
import { AFMessagesComponent } from '../shared/components/messages/messages.component';
import { AFInputComponent } from '../shared/components/input/input.component';
import { AFTableComponent } from '../shared/components/table/table.component';
import { AFPasswordComponent } from '../shared/components/password/password.component';
import { OrderGymPassComponent } from './pages/gym-passes/dialogs/order-gym-pass/order-gym-pass.component';



@NgModule({
  declarations: [ProfileComponent,
    AFPersonalTrainerComponent,
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
    AFProfileMenuComponent
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
    AFPasswordComponent
  ],
  exports: [
  ]
})
export class ProfileModule { }
