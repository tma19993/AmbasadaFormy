import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFIconShadowComponent } from "./iconShadow.component";
import { AFIconShadowModule } from "./iconShadow.module";

const meta: Meta<AFIconShadowComponent> = {
  title: "Core/Icon Shadow",
  component: AFIconShadowComponent,
  decorators: [
    moduleMetadata({
      imports: [AFIconShadowModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFIconShadowComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    iconClassName: "pi-search",
  },
};
