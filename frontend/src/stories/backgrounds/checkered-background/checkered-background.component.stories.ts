import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Backgorunds/checkered',
  decorators:[
    moduleMetadata({
      imports: [
        BrowserAnimationsModule
      ],
    })
  ],
  parameters:{
    viewport: DEFAULT_VIEWPORT
  },
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
} as Meta;

export const Primary: Story = () => ({
  template: `
<section 
style="
height: 70vh;  
background-color: #0e0e0e;  
background-image: 
linear-gradient(0deg, #000 5%, transparent 5%, transparent 99%, #000 99%, #000), 
linear-gradient(90deg, #000 5%, #0e0e0e 5%, #0e0e0e 99%, #000 99%, #000);  
background-size: 50px 50px;"
></section>

`,
});
