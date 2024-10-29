import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFGymPassCardComponent } from "./gym-pass-card.component";
import { AFGymPassCardModule } from "./gym-pass-card.module";
import { TranslateModule } from "@ngx-translate/core";

const meta: Meta<AFGymPassCardComponent> = {
  title: "Core/Gym Pass Card",
  component: AFGymPassCardComponent,
  decorators: [
    moduleMetadata({
      imports: [AFGymPassCardModule, BrowserAnimationsModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFGymPassCardComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    title: "Pass",
    subtitle:"new pass",
    name: "Fun"
  },
};
