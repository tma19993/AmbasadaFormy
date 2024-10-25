import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AFButtonModule } from '../button/button.module';
import { AFTileModule } from '../tile/tile.module';
import { TranslateModule } from '@ngx-translate/core';
import { GymPassInfoComponent } from './gym-pass-info.component';

@NgModule({
  declarations: [GymPassInfoComponent],
  imports: [CommonModule,
    AFButtonModule,
    AFTileModule,
    TranslateModule.forChild()
  ],
  exports: [GymPassInfoComponent],
})
export class GymPassInfoModule {}
