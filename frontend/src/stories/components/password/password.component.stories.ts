import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AfPasswordModule } from './password.module';
import { PasswordComponent } from './password.component';

export default {
  title: 'Core/Password',
  decorators: [
    moduleMetadata({
      imports: [AfPasswordModule, BrowserAnimationsModule],
    }),
  ],
  component: PasswordComponent,
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
  weakLabel: 'Weak',
  mediumLabel: 'Medium',
  strongLabel: 'Strong-man',
  toggleMask: true,
  feedback: true,
  maxLength: 20,
  floatLabel:true,
  floatLabelText: "Password"
};
export const Secondary: Story = Template.bind({});
Secondary.args = {
  weakLabel: 'Weak',
  mediumLabel: 'Medium',
  strongLabel: 'Strong-man',
  toggleMask: true,
  feedback: true,
  maxLength: 20,
  disabledPassword:true
};
