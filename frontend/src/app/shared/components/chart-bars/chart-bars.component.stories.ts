import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChartBarsComponent } from "./chart-bars.component";
import { SharedModule } from "primeng/api";
import { PrimengModule } from "../../modules/primeng/primeng.module";

const meta: Meta<ChartBarsComponent> = {
  title: "Core/ChartBars",
  component: ChartBarsComponent,
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

type Story = StoryObj<ChartBarsComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {

  },
};
