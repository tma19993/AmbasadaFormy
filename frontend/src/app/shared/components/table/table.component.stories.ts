import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFTableComponent } from "./table.component";
import { SharedModule } from "primeng/api";
import { PrimengModule } from "../../modules/primeng/primeng.module";
import { AFButtonComponent } from "../button/button.component";

const meta: Meta<AFTableComponent<any>> = {
  title: "Core/Table",
  component: AFTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SharedModule,
        PrimengModule,
        AFButtonComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFTableComponent<any>>;

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
    editable: true
  },
};
