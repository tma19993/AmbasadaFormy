import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFTableComponent } from './table.component';
import { AFTableModule } from './table.module';

export default {
  title: 'Core/Table',
  decorators:[
    moduleMetadata({
      imports: [
        AFTableModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: AFTableComponent,
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
Primary.args = {
    columns: [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
    ],
    values: [
        {
            code: 'f230fh0g3',
            name: 'Bamboo Watch' 
        },
        {
            code: 'f230fh0g32',
            name: 'Bamboo Watch' 
        },
    ],
    paginator:true,
    rows:2
};

