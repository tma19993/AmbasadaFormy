import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';


@Component({
  selector: 'af-error-view',
  standalone: true,
  imports: [AFButtonComponent, SharedModule, AFTileComponent],
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.scss'
})
export class ErrorViewComponent {
  constructor() { }

  public backToPrevious(): void {
    history.back();
  }
  public refresh(): void {
    location.reload()
  }
}
