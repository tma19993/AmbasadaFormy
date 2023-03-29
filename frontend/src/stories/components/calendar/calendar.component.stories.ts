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

export const WithIcon: Story = Template.bind({});
WithIcon.args={
  showIcon:true,
  showButtonBar:false,
  readonlyInput:false,
  showTime:false,
  showSeconds:false,
}

export const WithButtonBar: Story = Template.bind({});
WithButtonBar.args={
  showIcon:false,
  showButtonBar:true,
  readonlyInput:false,
  showTime:false,
  showSeconds:false,
}

export const WithReadOnlyInput: Story = Template.bind({});
WithReadOnlyInput.args={
  showIcon:false,
  showButtonBar:false,
  readonlyInput:true,
  showTime:false,
  showSeconds:false,
}

export const WithShowTime: Story = Template.bind({});
WithShowTime.args={
  showIcon:false,
  showButtonBar:false,
  readonlyInput:false,
  showTime:true,
  showSeconds:false,
}

export const WithSeconds: Story = Template.bind({});
WithSeconds.args={
  showIcon:false,
  showButtonBar:false,
  readonlyInput:false,
  showTime:true,
  showSeconds:true,
}
