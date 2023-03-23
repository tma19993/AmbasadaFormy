import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFRadiobuttonModule } from './radiobutton.module';
import { RadioButtonComponent } from './radiobutton.component';


export default {
  title: 'Core/RadioButton',
  decorators: [
    moduleMetadata({
      imports: [AFRadiobuttonModule, BrowserAnimationsModule],
    }),
  ],
  component: RadioButtonComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Primary: Story = Template.bind({});
Primary.args = {
  disabled: true,
};
export const Secondary: Story = Template.bind({});
Primary.args = {
  disabled: false,
};
