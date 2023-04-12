import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { ButtonComponent } from './button.component';
import { AFButtonModule } from './button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Core/Button',
  decorators: [
    moduleMetadata({
      imports: [AFButtonModule, BrowserAnimationsModule],
    }),
  ],
  component: ButtonComponent,
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
  label: 'Button',
  iconPos: 'left',
  fontSize: 30
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  label: 'Button',
  iconPos: 'left',
  fontSize: 30,
  disabled:true
};

export const TransparentButton: Story = Template.bind({});
TransparentButton.args = {
  label: 'Button',
  iconPos: 'left',
  fontSize: 30,
  transparentButton: true
};
export const TransparentButtonWithIconOnTop: Story = Template.bind({});
TransparentButtonWithIconOnTop.args = {
  label: 'Button',
  iconPos: 'top',
  iconClassName:"pi-undo",
  fontSize: 15,
  iconSize:30,
  transparentButton: true
};
