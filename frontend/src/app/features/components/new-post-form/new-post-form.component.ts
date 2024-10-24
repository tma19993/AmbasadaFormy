import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { EnumIconFloat } from 'src/stories/enums/input.enum';
import { BlogService } from 'src/app/services';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostFormComponent implements OnInit{
 public form: FormGroup;
 public searchIconConfig: inputIconConfig = {
  iconClassName: "pi-search",
  iconFloat: EnumIconFloat.left
}
 constructor(
  private formBulider: FormBuilder,
  private blogService: BlogService,
  private dialogRef: DynamicDialogRef
){}
 public ngOnInit(): void {
   this.initForm();
  }

  public addNewPost():void {
    this.blogService.addNewPost(this.form.value).subscribe();
    this.dialogRef.close(this.form.value);
    this.dialogRef.destroy();
  }

  private initForm():void {
   this.form = this.formBulider.group({
    title: ["",Validators.required],
    content:["",Validators.required]
   })
  }


}
