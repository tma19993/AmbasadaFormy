import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { AFInputTextareaComponent } from "./inputtextarea.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextareaModule } from "primeng/inputtextarea";

const meta: Meta<AFInputTextareaComponent> = {
  title: "Core/InputTextarea",
  component: AFInputTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        InputTextareaModule,
        FormsModule,
        FloatLabelModule,
        BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFInputTextareaComponent>;

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
