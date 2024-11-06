import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFPasswordComponent } from "./password.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { PasswordModule } from "primeng/password";

const meta: Meta<AFPasswordComponent> = {
  title: "Core/Password",
  component: AFPasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PasswordModule, FormsModule,DividerModule, BrowserAnimationsModule],
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
