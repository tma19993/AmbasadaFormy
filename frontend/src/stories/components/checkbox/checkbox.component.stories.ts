import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CheckboxComponent } from "./checkbox.component";
import { AfCheckboxModule } from "./checkbox.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";

const meta: Meta<CheckboxComponent> = {
  title: "Core/Checkbox",
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [AfCheckboxModule, BrowserAnimationsModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

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
