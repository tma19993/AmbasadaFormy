import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CheckboxComponent } from './checkbox.component';
import { AppCheckboxModule } from './checkbox.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Binary } from '@angular/compiler';

export default {
  title: 'Core/Checkbox',
  decorators:[
    moduleMetadata({
      imports: [
        AppCheckboxModule,
        BrowserAnimationsModule,
        FormsModule
      ],
    })
  ],
  component: CheckboxComponent,
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
  label: "Value1",
  binary: false,
  disabled: false
}
export const Secondary: Story = Template.bind({});
Primary.args={
  label: "Value1",
  binary: true,
  disabled: true
}