import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuStaticModule } from './menuStatic.module';
import { MenuStaticComponent } from './menuStatic.component';

export default {
  title: 'Core/MenuStatic',
  decorators:[
    moduleMetadata({
      imports: [
        MenuStaticModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: MenuStaticComponent,
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
}

