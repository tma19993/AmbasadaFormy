import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';

@NgModule({
  declarations: [
    TileComponent
  ],
  exports: [
    TileComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class AFTileModule { }
