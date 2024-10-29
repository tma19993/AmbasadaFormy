import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFProfileMenuComponent } from "./profile-menu.component";
import { AFProfileMenuModule } from "./profile-menu.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AFTileModule } from "../tile/tile.module";
import { HttpLoaderFactory } from "src/shared/untils";

const meta: Meta<AFProfileMenuComponent> = {
  title: "Views/Profile/Menu",
  component: AFProfileMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AFProfileMenuModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        AFTileModule,
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
