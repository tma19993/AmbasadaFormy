import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFProfileMenuComponent } from "./profile-menu.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory } from "src/shared/untils";
import { AFTileComponent } from "src/app/shared/components/tile/tile.component";

const meta: Meta<AFProfileMenuComponent> = {
  title: "Views/Profile/Menu",
  component: AFProfileMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AFTileComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
};

export default meta;

type Story = StoryObj<AFProfileMenuComponent>;

const Template: Story = {
  render: (args) => ({
    template: `
      <section style="background-color: grey; height: 100vh;">
        <div style="width: 25%; padding: 40px">
          <af-tile>
            <af-profile-menu [isAdmin]="args.isAdmin" />
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
