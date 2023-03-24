import { Component, Input } from '@angular/core';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() public label: string = '';
@Input() public iconConfig: inputIconConfig | undefined ;
@Input() public styleClass: string = '' ;
@Input() public iconPos: boolean = false;
@Input() public loading: boolean = false;
load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 500);
    }

constructor(){

}
}
