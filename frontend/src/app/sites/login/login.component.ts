import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

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

  public defaultData: inputIconConfig = {
    iconClassName: 'pi-search',
    iconFloat: enumIconFloat.left,
  };

  public onClickLogin(): void {
    // login logic here
  }

  public backToWelcomePage(): void{
    this.router.navigate(['/home']);
  }
}
