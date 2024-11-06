import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChartBarsComponent } from "./chart-bars.component";
import { CommonModule } from "@angular/common";
import { ChartModule } from "primeng/chart";

const meta: Meta<ChartBarsComponent> = {
  title: "Core/ChartBars",
  component: ChartBarsComponent,
  decorators: [
    moduleMetadata({
      imports: [ CommonModule,
        ChartModule, 
        BrowserAnimationsModule],
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
