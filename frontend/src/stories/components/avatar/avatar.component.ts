import { Component, Input, OnInit } from '@angular/core';
type shapeType = "square" | "circle" | undefined;
@Component({
  selector: 'af-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() public login: string ="";
  @Input() public size: string = "";
  @Input() public shape:shapeType = undefined;
  public letterOfLogin:string = "";
  constructor() {}

  public ngOnInit(): void {
   this.letterOfLogin = this.login[0].toUpperCase();
  }



}
