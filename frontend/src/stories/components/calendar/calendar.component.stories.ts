import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CalendarComponent } from './calendar.component';
import { AppCalendarModule } from './calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Core/Calendar',
  decorators:[
    moduleMetadata({
      imports: [
        AppCalendarModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: CalendarComponent,
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
  showIcon:false,
  showButtonBar:false,
  readonlyInput:false,
  showTime:false,
  showSeconds:false,
}

export const Secondary: Story = Template.bind({});
Primary.args={
  showIcon:true,
  showButtonBar:true,
  readonlyInput:true,
  showTime:true,
  showSeconds:true,
}
