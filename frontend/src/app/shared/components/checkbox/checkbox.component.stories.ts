import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { AFCheckboxComponent } from "./checkbox.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";

const meta: Meta<AFCheckboxComponent> = {
  title: "Core/Checkbox",
  component: AFCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxModule, BrowserAnimationsModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFCheckboxComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    label: "Value1",
    disabled: false,
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    label: "Value1",
    disabled: true,
  },
};
