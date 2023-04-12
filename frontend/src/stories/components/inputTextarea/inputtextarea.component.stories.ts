import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { InputTextareaComponent } from './inputtextarea.component';
import { AfInputTextareaModule } from './inputtextarea.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Core/InputTextarea',
  decorators:[
    moduleMetadata({
      imports: [
        AfInputTextareaModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: InputTextareaComponent,
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
  size:{
    rows:5,
    cols:20
  },
  autoResize:true,
  disabled:false,
  floatLabel:true,
  floatLabelText: "Text"
}

