import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { BlogService } from 'src/app/core/services';
import { EnumIconFloat } from 'src/app/shared/enums';
import { inputIconConfig } from 'src/app/shared/models';


@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostFormComponent implements OnInit {
  public form: FormGroup;
  public searchIconConfig: inputIconConfig = {
    iconClassName: "pi-search",
    iconFloat: EnumIconFloat.left
  }
  constructor(
    private formBulider: FormBuilder,
    private blogService: BlogService,
    private dialogRef: DynamicDialogRef
  ) { }
  public ngOnInit(): void {
    this.initForm();
  }

  public addNewPost(): void {
    if (this.form.valid) {
      console.log(this.form);
      const formData = new FormData();
      formData.append('title', this.form.get('title')?.value);
      formData.append('content', this.form.get('content')?.value);
      formData.append('photo', this.form.get('photo')?.value);
      this.blogService.addNewPost(this.form.value).subscribe();
      this.dialogRef.close(this.form.value);
      this.dialogRef.destroy();
    }

  }

  public onFileSelected(event: any): void {
    const file = event.files[0];
    this.form.patchValue({ photo: file });
  }

  private initForm(): void {
    this.form = this.formBulider.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      photo: [null]
    })
  }

}
