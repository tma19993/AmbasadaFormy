import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageModel } from './language.model';

@Component({
  selector: 'af-languageChanger',
  templateUrl: './languageChanger.component.html',
  styleUrls: ['./languageChanger.component.scss'],
})
export class LanguageChangerComponent {
  @Input() fontSize: number = 12;
  public languages: LanguageModel[];
  public showDropdownOption: boolean = false;
  public selectedLanguage: string;

  constructor(private translateService: TranslateService, private elementRef: ElementRef) {
    this.translateService.setDefaultLang(localStorage.getItem('language')!);
    this.selectedLanguage = localStorage.getItem('language')!;
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
    localStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
