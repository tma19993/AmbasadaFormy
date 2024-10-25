import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { EnumIconFloat } from 'src/stories/enums/input.enum';
import { BlogService } from 'src/app/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, EMPTY } from 'rxjs';

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
    if(this.form.valid){
      const formData = new FormData();
      formData.append('title', this.form.get('title')?.value);
      formData.append('content', this.form.get('content')?.value);
      formData.append('photo', this.form.get('photo')?.value);
      this.blogService.addNewPost(formData).subscribe();
      this.dialogRef.close(this.form.value);
      this.dialogRef.destroy();
    }
  
  }

  public onFileSelected(event: any):void {
    const file = event.files[0];
    this.form.patchValue({ photo: file });
  }

  private initForm():void {
   this.form = this.formBulider.group({
    title: ["",Validators.required],
    content:["",Validators.required],
    photo:[null]
   })
  }

}
