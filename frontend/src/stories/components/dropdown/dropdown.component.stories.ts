import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { DropdownComponent } from "./dropdown.component";
import { AFDropdownModule } from "./dropdown.model";

const meta: Meta<DropdownComponent> = {
  title: "Core/Dropdown",
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [AFDropdownModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<DropdownComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    placeholder: "placeholder",
    data: [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ],
    optionLabelName: "name",
    filterName: "name",
    filter: true,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    placeholder: "placeholder",
    data: [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ],
    optionLabelName: "name",
    disabled: true,
  },
};
