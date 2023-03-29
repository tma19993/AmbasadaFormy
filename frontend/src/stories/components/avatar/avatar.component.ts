import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floatlabel',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() public login: string ="";
  @Input() public size: string = "";
  @Input() public shape: string = "";
  public letterOfLogin:string = "";
  constructor() {}

  public ngOnInit(): void {
   this.letterOfLogin = this.login[0].toUpperCase();
  }



}
