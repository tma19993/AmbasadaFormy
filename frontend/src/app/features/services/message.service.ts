import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
 })
export class AfMessageService {
  constructor(private messageService: MessageService) { }
  public addErrorMessage(message:string,header?: string): void {
    console.log(message);
    this.messageService.add({ severity: 'error',summary:header, detail: message });
      setTimeout(()=>{
        this.messageService.clear();
      },2000);
  }

  public addSuccesMessage(message:string,header?: string): void {
    this.messageService.add({ severity: 'success',summary:header, detail: message });
      setTimeout(()=>{
        this.messageService.clear();
      },2000);
  }
}
