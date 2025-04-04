import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageModel } from './language.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AFLanguageChangerComponent {
  @Input() fontSize: number = 12;
  public languages: LanguageModel[];
  public showDropdownOption: boolean = false;
  public selectedLanguage: string;

  constructor(private translateService: TranslateService, private elementRef: ElementRef) {
    this.translateService.setDefaultLang(sessionStorage.getItem('language')!);
    this.selectedLanguage = sessionStorage.getItem('language')!;
    this.languages = [
      { id: 'pl', name: 'polski' },
      { id: 'en', name: 'angielski' },
    ];
  }
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.showDropdownOption = false;
    }
  }

  public dropdownOptionsToggler(): void {
    this.showDropdownOption = !this.showDropdownOption;

  }

  changeLanguage(id: string) {
    sessionStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
