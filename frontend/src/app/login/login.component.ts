import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() public login: string | undefined;
  @Input() public password: string | undefined;
  @Input() public remember: boolean | undefined;
  constructor(private router: Router) { }


  ngOnInit() {
  }

  onClickLogin() {
    // login logic here
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
