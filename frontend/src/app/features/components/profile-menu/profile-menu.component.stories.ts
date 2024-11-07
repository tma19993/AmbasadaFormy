import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AFProfileMenuComponent } from "./profile-menu.component";
import { HttpClient, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AFTileComponent } from "src/app/shared/components/tile/tile.component";
import { AFButtonComponent } from "src/app/shared/components/button/button.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";


 function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}


const meta: Meta<AFProfileMenuComponent> = {
  title: 'Views/Profile/Menu',
  component: AFProfileMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AFTileComponent,
        AFButtonComponent,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        })
      ],
      providers: [Router], 
    }),
  ],
};

export default meta;

type Story = StoryObj<AFProfileMenuComponent>;

const Template: Story = {
  render: (args) => ({
    template: `
      <section style=" height: 100vh;">
        <div style="width: 25%; padding: 40px">
          <af-tile>
            <af-profile-menu [isAdmin]="isAdmin" />
          </af-tile>
        </div>
      </section>
    `,
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    isAdmin: false, 
  },
};
export const Admin: Story = {
  ...Template,
  args: {
    isAdmin: true, 
  },
};
