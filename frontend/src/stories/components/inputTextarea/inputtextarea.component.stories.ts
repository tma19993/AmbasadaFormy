import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { InputTextareaComponent } from "./inputtextarea.component";
import { AfInputTextareaModule } from "./inputtextarea.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

const meta: Meta<InputTextareaComponent> = {
  title: "Core/InputTextarea",
  component: InputTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [AfInputTextareaModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<InputTextareaComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    size: {
      rows: 5,
      cols: 20,
    },
    autoResize: true,
    disabled: false,
    floatLabel: true,
    floatLabelText: "Text",
  },
};
