import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AFGymPassCardComponent } from './gym-pass-card.component';
import { AFButtonModule } from '../button/button.module';
import { AFTileModule } from '../tile/tile.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AFGymPassCardComponent],
  imports: [CommonModule,
    AFButtonModule,
    AFTileModule,
    TranslateModule.forChild()
  ],
  exports: [AFGymPassCardComponent],
})
export class AFGymPassCardModule {}
