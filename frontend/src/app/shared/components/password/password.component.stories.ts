import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AfPasswordModule } from "./password.module";
import { PasswordComponent } from "./password.component";

const meta: Meta<PasswordComponent> = {
  title: "Core/Password",
  component: PasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [AfPasswordModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<PasswordComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    weakLabel: "Weak",
    mediumLabel: "Medium",
    strongLabel: "Strong-man",
    feedback: true,
    maxLength: 20,
    floatLabelText: "Password",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    weakLabel: "Weak",
    mediumLabel: "Medium",
    strongLabel: "Strong-man",
    feedback: true,
    maxLength: 20,
    disabledPassword: true,
  },
};
