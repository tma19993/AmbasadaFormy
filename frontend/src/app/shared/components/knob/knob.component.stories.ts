import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFKnobComponent } from "./knob.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { KnobModule } from "primeng/knob";

const meta: Meta<AFKnobComponent> = {
  title: "Core/Knob",
  component: AFKnobComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, KnobModule, FormsModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFKnobComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const ExampleValues: Story = {
  ...Template,
  args: {
    value: 20,
    minValue: 0,
    maxValue: 100,
    size: 100,
    label: "arebsfdgndfsgbsdnf"
  },
};

export const Readonly: Story = {
  ...Template,
  args: {
    value: 20,
    minValue: 0,
    maxValue: 100,
    size: 100,
    readonly: true,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    value: 20,
    minValue: 0,
    maxValue: 100,
    size: 100,
    disabled: true,
  },
};
