import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { AFDropdownModule } from './dropdown.model';

export default {
  title: 'Core/Dropdown',
  decorators:[
    moduleMetadata({
      imports: [
        AFDropdownModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: DropdownComponent,
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
    placeholder: "placeholder",
    data: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ],
    optionLabel:"name",
    filterBy: "name",
    filter:true
}
export const Disabled: Story = Template.bind({});
Disabled.args={
    placeholder: "placeholder",
    data: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ],
    optionLabel:"name",
    disabled:true
}

