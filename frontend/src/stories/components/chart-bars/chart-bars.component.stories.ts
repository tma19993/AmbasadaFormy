import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartBarsComponent } from './chart-bars.component';
import { ChartBarsModule } from './chart-bars.module';

export default {
  title: 'Core/ChartBars',
  decorators:[
    moduleMetadata({
      imports: [
        ChartBarsModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: ChartBarsComponent,
  parameters:{
    viewport: DEFAULT_VIEWPORT
  },
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
} as Meta;

const Template: Story  = args => ({
  props:{
    ...args
  }
})

export const Primary: Story = Template.bind({});
Primary.args={
  label: "Button"
}



