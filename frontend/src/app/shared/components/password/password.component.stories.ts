import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFPasswordComponent } from "./password.component";
import { SharedModule } from "primeng/api";
import { PrimengModule } from "../../modules/primeng/primeng.module";

const meta: Meta<AFPasswordComponent> = {
  title: "Core/Password",
  component: AFPasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, PrimengModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFPasswordComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    feedback: true,
    maxLength: 20,
    floatLabelText: "Password",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    feedback: true,
    maxLength: 20,
    disabledPassword: true,
  },
};
