import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AfMessagesModule } from './messages.module';
import { MessagesComponent } from './messages.component';

export default {
  title: 'Core/Messages',
  decorators:[
    moduleMetadata({
      imports: [
        AfMessagesModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: MessagesComponent,
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

export const Success: Story = Template.bind({});
Success.args={
  messages: [{ severity: 'success', summary: 'Success', detail: 'Success Content' }]
}

export const Info: Story = Template.bind({});
Info.args={
  messages: [  { severity: 'info', summary: 'Info', detail: 'Info Content' }]
}

export const Warm: Story = Template.bind({});
Warm.args={
  messages: [{severity: 'warn', summary: 'Waning', detail: 'Warm Content' }]
}

export const Error: Story = Template.bind({});
Error.args={
  messages: [{severity: 'error', summary: 'Error', detail: 'Error Content' }]
}


