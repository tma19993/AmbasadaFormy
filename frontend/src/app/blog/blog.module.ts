import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { PaginatorModule } from 'primeng/paginator';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { AFInputComponent } from 'src/app/shared/components/input/input.component';
import { AFMenuStaticComponent } from '../shared/components/menu-static/menu-static.component';
import { NewPostFormComponent, PostDetailsComponent } from './dialogs';
import { AFPhotoUploaderComponent } from '../shared/components/photo-uploader/photo-uploader.component';
import { AFInputTextareaComponent } from '../shared/components/inputTextarea/inputtextarea.component';
import { BlogRoutingModule } from './blog-routing.module';
import { AFMenuComponent } from './components/menu/menu.component';
import { PostComponent } from './components/post/post.component';
import { BlogService } from '../core/services';
import { BlogMockService } from '../shared/mocks/blog.mock.service';





@NgModule({
    declarations: [BlogComponent, NewPostFormComponent, PostDetailsComponent, AFMenuComponent],
    imports: [
        SharedModule,
        PrimengModule,
        BlogRoutingModule,
        AFButtonComponent,
        PaginatorModule,
        AFTileComponent,
        AFInputComponent,
        AFMenuStaticComponent,
        AFPhotoUploaderComponent,
        AFInputTextareaComponent,
        PostComponent
    ],
    providers: [
        { provide: BlogService, useClass: BlogMockService }
    ]
})
export class BlogModule { }
