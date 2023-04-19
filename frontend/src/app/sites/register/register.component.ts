import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { Categories } from 'src/stories/interfaces/radiobutton.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public genderArray:Categories[]=[
    {
      name: "Mężczyzna",
      key:"men"
    },
    {
      name: "Kobieta",
      key:"women"
    },
    {
      name: "Inna",
      key:"other"
    }
  ]
  constructor(private router: Router) { }

  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: enumIconFloat.left,
  };

  public passwordData: inputIconConfig = {
    iconClassName: 'pi-lock',
    iconFloat: enumIconFloat.left,
  };

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public goToWelcomePage(): void {
    this.router.navigate(['/welcome']);
  }
}
