import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageModel } from './language.model';

@Component({
  selector: 'af-languageChanger',
  templateUrl: './languageChanger.component.html',
  styleUrls: ['./languageChanger.component.scss'],
})
export class LanguageChangerComponent implements OnInit, OnDestroy {
  @Input() fontSize: number = 12;
  public languages: LanguageModel[];
  public showDropdownOption: boolean = false;
  public selectedLanguage: string;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(localStorage.getItem('language')!);
    this.selectedLanguage = localStorage.getItem('language')!;
    this.languages = [
      { id: 'pl', name: 'polski' },
      { id: 'en', name: 'angielski' },
    ];
  }

  public ngOnInit(): void {
    window.addEventListener('click', this.closeLanguageDialog.bind(this));
  }

  public ngOnDestroy(): void {
    window.removeEventListener('click', this.closeLanguageDialog.bind(this));
  }

  public dropdownOptionsToggler(): void {
    this.showDropdownOption = !this.showDropdownOption;
    // console.log(this.showDropdownOption);
  }

  public closeLanguageDialog(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const windowElement = document.querySelector('.dropdown__options');
    const buttonElement = document.querySelector('.pi-language');

    if (this.showDropdownOption && clickedElement != windowElement && clickedElement != buttonElement) {
      this.showDropdownOption = false;
    
    }
  }

  changeLanguage(id: string) {
    localStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
