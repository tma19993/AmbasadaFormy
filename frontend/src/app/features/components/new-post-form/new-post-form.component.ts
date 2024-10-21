import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { EnumIconFloat } from 'src/stories/enums/input.enum';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit{
 public form: FormGroup;
 public searchIconConfig: inputIconConfig = {
  iconClassName: "pi-search",
  iconFloat: EnumIconFloat.left
}
 constructor(private formBulider: FormBuilder){}
 public ngOnInit(): void {
   this.initForm();
  }
  private initForm():void {
   this.form = this.formBulider.group({
    title: ["",Validators.required],
    content:["",Validators.required]
   })
  }


}
