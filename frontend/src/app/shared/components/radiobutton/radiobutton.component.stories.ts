import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { RadioButtonsComponent } from "./radiobutton.component";
import { SharedModule } from "primeng/api";
import { PrimengModule } from "../../modules/primeng/primeng.module";

const meta: Meta<RadioButtonsComponent> = {
  title: "Core/RadioButton",
  component: RadioButtonsComponent,
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

type Story = StoryObj<RadioButtonsComponent>;

const Template: Story = {
  render: (args) => ({
    props: {
      ...args,
    },
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    categories: [
      { name: "Option 1", key: "male" },
      { name: "Option 2", key: "female" },
      { name: "Option 3", key: "other" },
    ],
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    categories: [
      { name: "Option 1", key: "male" },
      { name: "Option 2", key: "female" },
      { name: "Option 3", key: "other" },
    ],
    disabled: true,
  },
};

export const CustomLabels: Story = {
  ...Template,
  args: {
    categories: [
      { name: "Male", key: "male" },
      { name: "Female", key: "female" },
      { name: "Other", key: "other" },
    ],
  },
};
