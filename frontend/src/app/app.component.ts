import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AmbasadaFormy-front';

  public ngOnInit(): void {
   localStorage.setItem("language", "pl");
  }

  public reload():void{
    window.location.reload();
  }
}
