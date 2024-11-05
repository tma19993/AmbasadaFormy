import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFTableComponent } from "./table.component";
import { AFTableModule } from "./table.module";

const meta: Meta<AFTableComponent> = {
  title: "Core/Table",
  component: AFTableComponent,
  decorators: [
    moduleMetadata({
      imports: [AFTableModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFTableComponent>;

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
    columns: [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
    ],
    values: [
      {
        code: "f230fh0g3",
        name: "Bamboo Watch",
      },
      {
        code: "f230fh0g32",
        name: "Bamboo Watch",
      },
    ],
    paginator: true,
    rows: 2,
  },
};
